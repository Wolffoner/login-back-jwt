export interface ClientUser {
    id: string;
    avatar: string;
    email: string;
    name: string;
    surname: string;
    age: number,
    role: Role;
}

export interface ServerUser extends ClientUser {
    password: string;
}

enum Role {
    ADMIN = 'admin',
    USER = 'user'
}