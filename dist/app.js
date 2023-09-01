"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const accountRoutes_1 = __importDefault(require("./routes/accountRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/", accountRoutes_1.default);
const PORT = 3500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
