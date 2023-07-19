import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { error } from 'console';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        (req as CustomRequest).token = decoded;

        next();
    } catch (err) {
        next(error);
        res.status(httpStatus.UNAUTHORIZED).json({ message: 'Por favor autentifiquese..🤖' });
    }
};