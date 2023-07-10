import { Role } from './roleModel'

export interface User {
    id: number;
    username: string;
    realname: string;
    password: string;
    email: string;
    phone: string;
    status: number;
    token: string;
    created_at: string;
    update_at: string;
    roles: Role[];
}

export interface Profile {
    username: string;
    realname: string;
    phone: number;
}
