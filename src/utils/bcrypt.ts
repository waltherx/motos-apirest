import { compare, genSalt, hash } from 'bcryptjs';

export const encryptPassword = async (password: string) => {
    const salt = await genSalt(10);
    return await hash(password, salt);
};

export const comparePassword = async (password: string, hash: string) => await compare(password, hash);
