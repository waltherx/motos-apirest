import { Moto } from "@prisma/client";

interface Client {
    ID: number;
    ci: number;
    fullname: String;
    address: String;
    phone: String;
    status: number;
    motos: Moto[];
    created_at: string;
    update_at: string;
}