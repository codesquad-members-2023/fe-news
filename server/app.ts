import express, { Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { SectionModel, PressInfoInterface, UserModel } from './schemas/index';
const uuid = require('uuid');
import fs from 'fs/promises';
import { TEMP_ID } from '../src/constant';

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

app.get('/press', async (req, res) => {
  const page = req.query.page;
  const TOTAL_ITEM_AMOUNT = 24 * 4;
  try {
    const press = await getPress({ sliceNumber: TOTAL_ITEM_AMOUNT });
    res.status(200).json(press);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post('/user', async (req, res) => {
  const id = req.query.id;
  try {
    const result = await UserModel.create({
      id,
      subscribingPressIds: [],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

app.patch('/subscribe', async (req, res) => {
  const id = req.query.id;
  const pressId = req.query.pressId;
  try {
    const result = await UserModel.updateOne(
      { id },
      { $push: { subscribingPressIds: pressId } }
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

app.patch('/unsubscribe', async (req, res) => {
  const id = req.query.id;
  const pressId = req.query.pressId;
  try {
    const result = await UserModel.updateOne(
      { id },
      { $pull: { subscribingPressIds: pressId } }
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

app.get('/user', async (req, res) => {
  const id = req.query.id;
  try {
    const result = await UserModel.find({
      id,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

const ITEM_AMOUNT_PER_PAGE = 24 * 4;
const TOTAL_ITEM_AMOUNT = 24 * 4;

interface getPressProps {
  sliceNumber?: number;
}

const getPress = async ({ sliceNumber }: getPressProps) => {
  try {
    const data = await fs.readFile('./mock/press.json', 'utf8');
    let press = JSON.parse(data) as PressInfoInterface[];
    const result = await UserModel.find({ id: TEMP_ID });
    const subscribingPressIds = result[0].subscribingPressIds;
    press = press.map((item: any) => {
      if (subscribingPressIds.includes(item['pid'])) {
        return {
          ...item,
          isSubscribed: true,
        };
      }
      return {
        ...item,
        isSubscribed: false,
      };
    });

    if (!sliceNumber) {
      return press;
    }
    press = press.slice(0, sliceNumber);
    // press = press.slice(
    //   page * ITEM_AMOUNT_PER_PAGE,
    //   (page + 1) * ITEM_AMOUNT_PER_PAGE
    // );

    return press;
  } catch (error) {
    throw error;
  }
};

interface getPressInfoProps {
  pressId?: string;
  page?: number;
}
const getPressInfo = ({ pressId }: getPressInfoProps) => {
  return new Promise(async (resolve, reject) => {
    try {
      const press: PressInfoInterface[] = await getPress({ sliceNumber: -1 });
      const result = press.find((item: any) => item['pid'] === pressId);
      resolve(result);
    } catch (error) {
      reject({ message: error });
    }
  });
};

app.get('/rolling-news', async (req, res) => {
  try {
    const data = await fs.readFile('./mock/rollingnews.json', 'utf8');
    const news: PressInfoInterface[] = JSON.parse(data);
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

interface SectionInfoInterface {
  id: string;
  name: string;
  order: number;
  pressId: string;
  updatedAt?: Date;
  createdAt?: Date;
  press?: PressInfoInterface;
}

app.get('/section', async (req, res) => {
  const { page } = req.query;
  try {
    const section = await SectionModel.find().skip(Number(page)).limit(1);
    if (section) {
      const pressId = section[0].pressId;
      const press = await getPressInfo({ pressId });
      const data = section[0].toObject() as unknown extends SectionInfoInterface
        ? SectionInfoInterface
        : { press: unknown };
      data.press = press;
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
