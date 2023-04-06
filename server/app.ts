import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { SectionModel, PressInfoInterface } from './schemas';
const uuid = require('uuid');
const fs = require('fs');

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
  return new Promise((resolve, reject) => {
    fs.readFile('./mock/press.json', 'utf8', (err: Error, data: any) => {
      if (err) {
        reject(err);
        return;
      }
      const press: PressInfoInterface[] = JSON.parse(data);
      const result = press.filter((item) => item.pid === pressId);

      resolve(result[0]);
    });
  });
};

app.get('/rolling-news', async (req, res) => {
  try {
    fs.readFile('./mock/rollingnews.json', 'utf8', (err: Error, data: any) => {
      if (err) {
        throw Error(err.message);
      }
      const news: PressInfoInterface[] = JSON.parse(data);
      res.status(200).json(news);
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.get('/section', async (req, res) => {
  const { pressId } = req.query;
  try {
    Promise.all([
      await getPressInfo(pressId as string),
      await SectionModel.find({ pressId: pressId as string }),
    ]).then((values) => {
      const press: any = values[0];
      const section: any = values[1][0];
      const result = section.toObject();
      result.press = press;
      res.status(200).json({ result });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
