import { User } from './user';
import { userModel } from './user.model';
import { CreateUserRequest } from './types'
import * as bcrypt from 'bcrypt';

export class UserDao {
    constructor() {

    }

    async find(username: string): Promise<User> {
        try {
            let res: any = await userModel.findOne({ username: username });

            if (!username) {
                throw "Invalid username";
            }

            let user = new User(res._id, res.username, res.password);

            return user;

        } catch (error) {
            throw error;
        }
    }

    async create(req: CreateUserRequest) {
        /**
         * this is where we will hash our password 
         * before saving it into the database. 
         */

        let {
            username,
            password,
            email
        } = req;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            let res: any = await userModel.create({
                username: username,
                password: hashedPassword,
                email: email
            });

            let user = new User(res.id, res.username, res.password);
            return user;
        } catch (error) {
            throw error;
        }
    }
}