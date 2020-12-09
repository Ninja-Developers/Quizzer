import { User } from './user';
import { userModel } from './user.model';
import { CreateUserRequest } from './types'

export class UserDao {
    constructor() {

    }

    async find(username: string): Promise<User> {
        try {
            let res: any = await userModel.findOne({ username: username });

            if (!username) {
                throw "Invalid username";
            }

            let user = new User(res.username, res.password);

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
        try {
            let res: any = await userModel.create({
                username: req.username,
                password: req.password,
                email: req.email
            });

            let user = new User(res.username, res.password);
            return user;
        } catch (error) {
            throw error;
        }
    }
}