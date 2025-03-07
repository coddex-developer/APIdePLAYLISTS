import express from "express";
import "dotenv/config";
import route from "./routes/router.js";
const app = express();
const PORT = process.env.PORT || 8432;

app.use(express.json());
app.use(route);

app.listen(PORT, () => console.log(`Servidor ativo em http://localhost:${PORT}`));