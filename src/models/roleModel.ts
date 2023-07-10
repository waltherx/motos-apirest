import { User } from "./userModel";

export interface Role {
    id: number;
    name: string;
    sequence: string;
    memo: string;
    status: number;
    created_at: string;
    update_at: string;
    user: User;
}