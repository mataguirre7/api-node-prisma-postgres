import express from "express";
import { config } from "dotenv";
import app_router from "./routes/app.router.js";

config();
const app = express();
const PORT = process.env.PORT;
const api_url = '/api';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(api_url, app_router);

app.listen(PORT, () => {
  console.log(`server initialized at http://localhost:${PORT}`);
});
