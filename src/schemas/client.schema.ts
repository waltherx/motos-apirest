import { Client } from "../models/client.model";
import joi from "joi";

const clientSchema = joi.object<Client>({
    //id: joi.number().required(),
    ci: joi.number().required(),
    fullname: joi.string().required(),
    address: joi.string(),
    phone: joi.string()
});

export default clientSchema;
