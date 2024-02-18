import { Request, Response, NextFunction } from "express";

import httpStatus from "http-status";

/*export const validationInputs = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array().map((p) => console.error(p.msg)));
        return res.status(httpStatus.BAD_REQUEST).json({ errors });
    }
    next();
};*/


