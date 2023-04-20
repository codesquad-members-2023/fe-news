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
  TestSectionModel,
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

app.patch('/test-section', async (req, res) => {
  try {
    const sections = await SectionModel.find({});
    const categoryOrder = [
      '종합/경제',
      '방송/통신',
      'IT',
      '영자지',
      '스포츠/연예',
      '매거진/전문지',
      '지역',
    ];
    const result: any = [];
    for (const section of sections) {
      const pressId = section.pressId;
      const category = section.category;
      const categoryIndex = categoryOrder.findIndex((v) => v === category);
      result.push(categoryIndex);
      await SectionModel.updateOne(
        { pressId },
        { $set: { category: categoryIndex } } // Use $set instead of $push
      );
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

app.get('/press', async (req, res) => {
  try {
    const press = await PressModel.find({});
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

app.get('/section', async (req, res) => {
  const page = Number(req.query.page);
  try {
    const sectionsWithPress = await SectionModel.aggregate([
      {
        $lookup: {
          from: 'presses',
          localField: 'pressId',
          foreignField: 'pid',
          as: 'press',
        },
      },
      {
        $unwind: {
          path: '$press',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $sort: {
          category: 1,
        },
      },
      {
        $skip: page * 1,
      },
      {
        $limit: 1,
      },
    ]);

    const categoryCounts = await SectionModel.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    const categoryCountsObj = categoryCounts.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});

    if (sectionsWithPress.length === 0) {
      return res.status(204).json({ message: 'No sections' });
    }

    res.status(200).json({
      section: sectionsWithPress[0],
      categoryCounts: categoryCountsObj,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.get('/custom-section', async (req, res) => {
  const page = Number(req.query.page) || 0;

  try {
    const user = await UserModel.findOne({ id: TEMP_ID }).limit(1);
    const subscribingPressIds = user?.subscribingPressIds;
    const pressId = subscribingPressIds?.[page];

    const sectionWithPress = await SectionModel.aggregate([
      {
        $match: {
          pressId: pressId,
        },
      },
      {
        $lookup: {
          from: 'presses',
          localField: 'pressId',
          foreignField: 'pid',
          as: 'press',
        },
      },
      {
        $unwind: {
          path: '$press',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $sort: {
          category: 1,
        },
      },
      {
        $limit: 1,
      },
    ]);

    if (sectionWithPress.length === 0) {
      return res.status(204).json({ message: 'No section' });
    }

    const categoryCounts = await SectionModel.aggregate([
      {
        $match: {
          pressId: { $in: subscribingPressIds },
        },
      },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    const categoryCountsFormatted = categoryCounts.reduce((acc, cur) => {
      acc[cur._id] = cur.count;
      return acc;
    }, {});

    res.status(200).json({
      section: sectionWithPress[0],
      categoryCounts: categoryCountsFormatted,
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
