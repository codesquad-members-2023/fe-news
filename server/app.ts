import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { SectionModel } from './schemas';
import axios from 'axios';
const uuid = require('uuid');

dotenv.config();
mongoose.set('strictQuery', false);

const connectUrl = process.env.CONNECT_URL;
if (connectUrl) (async () => await mongoose.connect(connectUrl))();
const router = express.Router();

const app = express();
const port = 3001;

app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser.json());

app.post('/section', async (req, res) => {
  const id = uuid.v4();
  try {
    const result = await SectionModel.create({
      id,
      ...req.body,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

const getPressInfo = async (pressId: string) => {
  const data = await axios.get(`http://localhost:3000/press/101`);
  return data.data;
};

app.get('/section', async (req, res) => {
  const { pressId } = req.query;
  try {
    const data = await getPressInfo(pressId as string);
    // const result = await SectionModel.find({ id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
