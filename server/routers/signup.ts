import { Router, Request, Response, NextFunction} from "express";




export const signupGet = Router();

signupGet.get('/signup' , (req: Request, res: Response) => {
    res.send('Oluyor');
});

  
signupGet.post('/signup', (req: Request, res: Response, next: NextFunction) => {
    res.send(req.body.name)
});