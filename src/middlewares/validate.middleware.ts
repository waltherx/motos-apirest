import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { z, ZodError } from 'zod';

export function validateData(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue: any) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }))
                res.status(httpStatus.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
            } else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
            }
        }
    };
}