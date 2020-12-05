export interface User {
    username: string,
    email: string,
    _id: string
};

export interface CreateUserRequest{
    username: string,
    email: string
};