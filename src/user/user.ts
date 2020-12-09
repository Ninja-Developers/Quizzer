import * as bcrypt from 'bcrypt';

export class User {
    private id: string;
    private username: string;
    private password: string;
    private email: string | null;

    constructor(id: string, username: string, password: string, email?: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    async verifyPassword(password: string): Promise<boolean> {
        try {
            let compare = await bcrypt.compare(password, this.password);
            return compare;
        } catch (error) {
            throw error
        }
    }
}