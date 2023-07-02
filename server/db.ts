import  dotenv from 'dotenv';
import { Client, Connection } from "pg";

dotenv.config();

const host = process.env.POSTGRE_HOST;
const port =  parseInt(process.env.POSTGRE_PORT || "", 10);
const database = process.env.POSTGRE_DB;
const username= process.env.POSTGRE_USERNAME;
const password = process.env.POSTGRE_PASSWORD;

const connectionString = {
    host : host,
    port : port,
    database : database,            // Name of database to connect to
    user : username,            // Username of database user
    password : password,
}
// const client = new Client({
//     host : host,
//     port : port,
//     database : database,            // Name of database to connect to
//     user : username,            // Username of database user
//     password : password, 
// });



export default connectionString;