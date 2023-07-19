import { UserData } from "../models/userModel";
import prisma from "../utils/database";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function login(userIn: UserData) {
    try {
        const foundUser = await prisma.user.findUnique({
            where: {
                username: userIn.username
            }
        });

        if (!foundUser) {
            throw new Error('Nombre de Usuario incorrecto..😪');
        }

        const isMatch = bcrypt.compareSync(userIn.password, foundUser.password);

        if (isMatch) {
            const token = jwt.sign({ id: foundUser.id?.toString(), username: foundUser.username }, process.env.JWT_SECRET, {
                expiresIn: '7 days',
            });
            return { user: { id: foundUser.id, username: foundUser.username }, token: token };
        } else {
            throw new Error('Contraseña incorrecta');
        }
    } catch (error) {
        throw error;
    }
}