import express from "express";
import db from "./config/database.js";
import ProductRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.log('Connection error', error);
}

app.use(cors());
app.use(express.json());
app.use('/products', ProductRoutes);

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});