export class User {
    private id: string;
    private username: string;
    private password: string;
    private email: string | null;

    constructor(username: string, password: string, email?: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    verifyPassword(password: string): boolean {
        if (this.password === password) {
            return true;
        }

        return false;
    }
}