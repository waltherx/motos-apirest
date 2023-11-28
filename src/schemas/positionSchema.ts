import joi from "joi";
import { PositionSearchDate } from "../models/positionModel";



export const positionSearhDateSchema = joi.object<PositionSearchDate>({
    id: joi.number()
        .required(),
    fecha: joi.string()
        .isoDate()
        .required(),
    limit: joi.number()
        .integer()
        .optional()

});


