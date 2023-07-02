import express, { Express, Request, Response } from 'express'
import { defaulRoute } from './defaultRoute';
import { signupGet } from './signup';


export const routes = express.Router();
routes.use(defaulRoute);
routes.use(signupGet);
 