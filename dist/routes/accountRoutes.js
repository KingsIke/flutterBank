"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accountController_1 = require("../controller/accountController");
const router = express_1.default.Router();
router.post('/create-account', accountController_1.createAccount);
router.get('/account/:accountNumber', accountController_1.getAccount);
router.get('/accounts', accountController_1.getAllAccounts);
exports.default = router;
