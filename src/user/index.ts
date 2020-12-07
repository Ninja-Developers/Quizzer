import { userModel } from './user.model';
import { CreateUserRequest } from './types';

class User {
    constructor() {

    }

    async getUser(id: string) {
        try {
            let user = await userModel.findById(id);
            if (!user) {
                throw new Error('User does not exists');
            }

            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(req: CreateUserRequest) {
        try {
            let user = new userModel({
                username: req.username,
                email: req.email
            });

            await user.save();
            return "User Created"
        } catch (error) {
            throw error            
        }
    }
}

export default User;