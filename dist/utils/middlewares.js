"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccountNumber = exports.accountSchema = exports.option = void 0;
const joi_1 = __importDefault(require("joi"));
exports.option = {
    abortEarly: false,
    errors: {
        wrap: { label: '' }
    }
};
exports.accountSchema = joi_1.default.object().keys({
    accountHolderName: joi_1.default.string().required(),
    accountHolderDOB: joi_1.default.date().required(),
    accountType: joi_1.default.string().valid("Savings", "Checkings").required(),
    initialBalance: joi_1.default.number().min(0).required(),
});
const generateAccountNumber = () => {
    return Math.floor(1000000000 + Math.random() * 1000000000);
};
exports.generateAccountNumber = generateAccountNumber;
