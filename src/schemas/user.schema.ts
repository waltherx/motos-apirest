import { UserData } from "../models/user.model";
import joi from "joi";

const userLoginSchema = joi.object<UserData>({
    username: joi.string()
        .alphanum()
        .min(5)
        .max(30)
        .required(),
    password: joi.string()
        .min(8)
        .max(30)
        .required(),
});



export default userLoginSchema;
