import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { routes } from './routers/routes';


var cors = require('cors')

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/', routes);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

