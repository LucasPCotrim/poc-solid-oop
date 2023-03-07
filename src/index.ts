import express, { json } from 'express';
import cors from 'cors';
import productRouter from './routers/productROuter';

const app = express();
app.use(cors());
app.use(json());
app.use(productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
