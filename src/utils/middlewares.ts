import Joi from "joi";


export const option = {
    abortEarly: false,
    errors: {
       wrap : { label: '' }
    }
};

export const accountSchema = Joi.object().keys({
    accountHolderName: Joi.string().required(),
    accountHolderDOB: Joi.date().required(),
    accountType: Joi.string().valid("Savings", "Checkings").required(),
    initialBalance: Joi.number().min(0).required(),
});


export const generateAccountNumber = ()=> {
    return Math.floor(1000000000 + Math.random() * 1000000000); 
};