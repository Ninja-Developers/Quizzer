import * as bcrypt from 'bcrypt';

export class User {
    private _id: string;
    private _username: string;
    private _password: string;
    private _email: string | null;

    constructor(id: string, username: string, password: string, email?: string) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._email = email;
    }

    // getters 
    get id(): string {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password;
    }

    get email(): string | null {
        return this._email;
    }

    async verifyPassword(password: string): Promise<boolean> {
        try {
            let compare = await bcrypt.compare(password, this._password);
            return compare;
        } catch (error) {
            throw error
        }
    }
}