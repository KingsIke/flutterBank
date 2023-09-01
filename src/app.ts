import express from "express";
import logger from "morgan";
import accountRoutes from "./routes/accountRoutes";

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/", accountRoutes);

const PORT = 3500;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});