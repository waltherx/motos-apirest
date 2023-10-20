import { Prisma } from '@prisma/client';
export type User = Prisma.UserCreateManyInput;

export type UserCreateInput = Prisma.UserCreateInput;
export type UserUpdateInput = Partial<User>;

export type UserChangeData = {
    username: string;
    password_old: string;
    password_new: string;
}

export type UserData = {
    username: string;
    password: string;
}