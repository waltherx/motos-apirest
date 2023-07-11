import { Client } from "../models/clientModel";
import joi from "joi";

const clientSchema = joi.object<Client>({
    //id: joi.number().required(),
    ci: joi.number().required(),
    fullname: joi.string().required(),
    address: joi.string(),
    phone: joi.string(),
    status: joi.number().required()
});

export default clientSchema;
