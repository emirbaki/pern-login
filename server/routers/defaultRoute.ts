import express, { Request, Response } from 'express'
import connectionString from '../db';
import { Client, Connection,  } from "pg";

export const defaulRoute = express.Router();

type User = {
    ID: number,
    Name: string,
    Surname: string,
    Email: string,
    Password: string,
};

defaulRoute.post('/',async (req: Request, res: Response) => {
    const client = new Client(connectionString)
    await client.connect();

    const name = req.body.Name;
    const surname = req.body.Surname;
    const email = req.body.Email;
    const password = req.body.Password;
    const query = {
        name: 'fetch-user',
        text: 'SELECT * FROM public."user" WHERE "Name" = $1 AND "Surname" = $2 AND "Email" = $3 AND "Password" = $4',
        values: [name, surname, email , password],
    }
    // "SELECT Name, Surname, Email from user"
    const users = await client.query(query);

    if(users.rows[0]?.Email && users.rows[0]?.Email == email){
        await client.end();
        return res.status(401).send("There is an account already registered with this email");
    }

    const insertQuery = {
        name: 'insert-user',
        text: 'INSERT INTO public."user" ("ID", "Name", "Surname", "Email", "Password") VALUES((SELECT MAX("ID")+1 FROM public."user"),$1, $2, $3, $4)',
        values: [name, surname, email , password],
    }
    await client.query(insertQuery);
    await client.end();
    return res.status(200).send('Express + TypeScript Server, Welcome ' + name+ " " + surname );
});

// defaulRoute.get('/', async (req: Request, res: Response) => {
//     await client.connect();

//     const query = {
//         name: 'fetch-user',
//         text: 'SELECT * FROM public."user" WHERE "ID" = $1',
//         values: [1],
//     }
//     // "SELECT Name, Surname, Email from user"
//     const users = await client.query(query);
//     await client.end();
//     console.log(users.fields.map(field => field.name));

//     let _user : User = {
//         ID : users.rows[0].ID,
//         Name:users.rows[0].Name,
//         Surname :users.rows[0].Surname,
//         Email : users.rows[0].Email,
//         Password : users.rows[0].Password
//     };
    
    
    

//     console.log(_user.Name);
//     res.send('Express + TypeScript Server, Welcome ' + _user.Name+ " " + _user.Surname );
//   });
  