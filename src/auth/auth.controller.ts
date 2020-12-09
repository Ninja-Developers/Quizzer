import { Request, Response } from 'express';
import { UserDao } from '../user';
const userDao = new UserDao();

export const localLogin = (req: Request, res: Response) => {
    console.log(req.user);
    return res.status(200).send('Login successfull');
}

export const localSignup = async (req: Request, res: Response) => {
    let { username, password } = req.body;

    try {
        let user = await userDao.create({
            username,
            password
        });

        return res.status(201).json(user);

    } catch (error) {
        return res.status(404).send(error);
    }
}