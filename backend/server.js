import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
import cors from "cors";
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

connectDB(); //Connect to MongoDB

const app = express();

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("API si running...");
});

app.get("/api/products", (req, res) => {
    res.json(products);
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})