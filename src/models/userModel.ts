import { Prisma } from '@prisma/client';
export type User = Prisma.UserCreateManyInput;

export type UserCreateInput = Prisma.UserCreateInput;
export type UserUpdateInput = Partial<User>;

export type UserData = {
    username: string;
    password: string;
}