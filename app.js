import express from "express";
import indexRouter from "./routes/indexRouter.js";
import { fileURLToPath } from 'url';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", indexRouter);
app.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
});
