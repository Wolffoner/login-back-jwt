import { Role } from "../enums/roles.enum";

export interface ClientUser {
    email: string;
    id?: string;
    avatar?: string;
    name?: string;
    surname?: string;
    age?: number,
    role?: Role;
}

export interface ServerUser extends ClientUser {
    password: string;
}



