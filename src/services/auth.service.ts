import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserChangeData, UserCreateInput, UserData } from "../entities/user.model";
import prisma from "../utils/database.utils";
import { createUser } from "./user.service";


const verifyRefreshToken = async (refreshToken) => {
    const privateKey = process.env.JWT_SECRET;

    return new Promise(async (resolve, reject) => {

        jwt.verify(refreshToken, privateKey, async (err, tokenDetails) => {
            if (err)
                return reject({ error: true, message: "Invalid refresh token" });

            const foundUser = await prisma.user.findUnique({
                where: {
                    username: tokenDetails.username
                }
            });
            if (!foundUser) {
                return reject({ error: true, message: "User not found" });
            }
            resolve({
                foundUser,
                error: false,
                message: "Valid refresh token",
            });
        });

    });
};

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
            const token = jwt.sign({
                id: foundUser.id?.toString(),
                username: foundUser.username,
                email: foundUser.email,
                isAdmin: foundUser.isAdmin,
                avatar: foundUser.avatar,
                status: foundUser.status,
                role: foundUser.role_id
            }, process.env.JWT_SECRET,
                {
                    expiresIn: '7 days',
                });
            return {
                user: {
                    id: foundUser.id,
                    username: foundUser.username,
                    role: foundUser.role_id
                },
                token: token
            };
        } else {
            throw new Error('Contraseña incorrecta');
        }
    } catch (error) {
        throw error;
    }
}

export async function refresh(token: string) {
    try {
        verifyRefreshToken(token)
            .then(({ foundUser }) => {

                const accessToken = jwt.sign(
                    {
                        id: foundUser.id?.toString(),
                        username: foundUser.username,
                        email: foundUser.email,
                        isAdmin: foundUser.isAdmin,
                        avatar: foundUser.avatar,
                        status: foundUser.status,
                        role: foundUser.role_id
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '7 days' }
                );
                return {
                    user: {
                        id: foundUser.id,
                        username: foundUser.username,
                        role: foundUser.role_id
                    },
                    token: accessToken
                };
            })
            .catch((err) => { return err });
    } catch (error) {
        throw error;
    }
}

export async function signup(userIn: UserCreateInput) {
    try {
        const foundUser = await prisma.user.findUnique({
            where: {
                username: userIn.username
            }
        });

        if (foundUser) {
            throw new Error('Nombre de Usuario ya existe..😪');
        } else {
            const newUser = await createUser(userIn);
            delete (newUser.password);
            return newUser;
        }
    } catch (error) {
        throw error;
    }
}

export async function changePassword(userIn: UserChangeData) {
    try {
        const foundUser = await prisma.user.findUnique({
            where: {
                username: userIn.username
            }
        });

        if (foundUser) {
            const isMatch = bcrypt.compareSync(userIn.password_old, foundUser.password);
            if (isMatch) {
                const new_pass = foundUser.password = bcrypt.hashSync(userIn.password_new, 8);
                return await prisma.user.update({
                    where: {
                        id: foundUser.id,
                    },
                    data: {
                        password: new_pass
                    }
                });
            } else {
                return { "message": "La nueva contraseña es igual a la anterior..😪" };
            }
        } else {
            return { "message": "El nombre de usuario que ingresaste no está registrado..😪" };
        }
    } catch (error) {
        throw error;
    }
}