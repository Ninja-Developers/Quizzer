import { User } from './user';
import { userModel } from './user.model';

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
}