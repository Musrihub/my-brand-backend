import express from 'express';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

const app = express();

dotenv.config();

app.use(express.json());

const port = process.env.PORT || 4000;

const mongoDBUrl = process.env.DB_URL as string;

mongoose
  .connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Database connection failed: ', error.message);
  });

app.listen(port, () => {
  console.log(`server is started at port: ${port}`);
});
