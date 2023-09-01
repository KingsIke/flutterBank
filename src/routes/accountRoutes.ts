import express from "express";
import { getAllAccounts, createAccount, getAccount } from "../controller/accountController";

const router = express.Router();

router.post('/create-account', createAccount);
router.get('/account/:accountNumber', getAccount);
router.get('/accounts', getAllAccounts);

export default router;