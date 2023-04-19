import express, { Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  SectionModel,
  PressInfoInterface,
  UserModel,
  PressModel,
} from './schemas/index';
const uuid = require('uuid');
import fs from 'fs/promises';

const TEMP_ID = 'realsnoopso';

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
  const TOTAL_ITEM_AMOUNT = 24 * 4;
  try {
    const press = await PressModel.find({}).limit(TOTAL_ITEM_AMOUNT);
    res.status(200).json(press);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.post('/press', async (req, res) => {
  const body = req.body;

  try {
    const section = await SectionModel.findOne({ pressId: req.body.pid });
    if (!section) {
      return res.status(204).json({ message: 'cannot post' });
    }
    const result = await PressModel.create({
      ...body,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
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
    await PressModel.updateOne({ pid: id }, { $push: { isSubscribed: true } });
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
    await PressModel.updateOne({ pid: id }, { $push: { isSubscribed: false } });
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
      const press = await PressModel.findOne({ pid: pressId });
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

app.get('/custom-section', async (req, res) => {
  const { page } = req.query;
  try {
    const user = await UserModel.findOne({ id: TEMP_ID }).limit(1);
    const subscribingPressIds = user?.subscribingPressIds;
    const pressId = subscribingPressIds?.[Number(page)];
    const section = await SectionModel.find({ pressId });
    if (!section) res.status(204).json({ message: 'no section' });
    const press = await PressModel.findOne({ pid: pressId });
    const data = section[0].toObject() as unknown extends SectionInfoInterface
      ? SectionInfoInterface
      : { press: unknown };
    data.press = press;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
