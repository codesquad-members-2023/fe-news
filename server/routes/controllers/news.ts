import { SectionModel, PressModel } from '../../schemas/index.schemas';
const uuid = require('uuid');
import fs from 'fs/promises';
import { PressInfoInterface } from 'schemas/news.schemas';
import { Request, Response } from 'express';

export const getPress = async (req: Request, res: Response) => {
  try {
    const press = await PressModel.find({});
    if (!press) res.status(204).json({ message: 'No press' });
    res.status(200).json(press);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const postPress = async (req: Request, res: Response) => {
  const body = req.body;
  if (!body) return res.status(400).json({ message: 'wrong request' });
  const { pid } = req.body;
  try {
    const section = await SectionModel.findOne({ pressId: pid });
    if (!section) {
      return res.status(204).json({ message: 'cannot post' });
    }
    const result = await PressModel.create({
      ...body,
    });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
};

export const getRollingNews = async (req: Request, res: Response) => {
  try {
    const data = await fs.readFile('./mock/rollingnews.json', 'utf8');
    const news: PressInfoInterface[] = JSON.parse(data);
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getSection = async (req: Request, res: Response) => {
  const page = Number(req.query.page);
  try {
    const sectionsWithPress = await SectionModel.aggregate([
      {
        $sort: {
          category: 1,
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
        },
      },
      {
        $skip: page * 1,
      },
      {
        $limit: 1,
      },
    ]);
    if (sectionsWithPress.length === 0) {
      return res.status(204).json({ message: 'No section' });
    }

    const categoryCounts = await SectionModel.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    if (!categoryCounts) return res.status(204).json({ message: 'No counts' });

    let totalNumber = 0;
    let currentCategoryIndex = page;
    const category = sectionsWithPress[0].category;
    const categoryCountsObj = categoryCounts.reduce((acc, curr) => {
      if (Number(category) > Number(curr._id)) {
        currentCategoryIndex -= curr.count;
      }
      acc[curr._id] = curr.count;
      totalNumber += curr.count;
      return acc;
    }, {});

    if (sectionsWithPress.length === 0) {
      return res.status(204).json({ message: 'No sections' });
    }

    res.status(200).json({
      sectionData: sectionsWithPress[0],
      tabData: {
        categoryCounts: categoryCountsObj,
        totalNumber,
        currentCategoryIndex,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getCustomSection = async (req: Request, res: Response) => {
  const pressId = req.query.pressId;
  try {
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
        $limit: 1,
      },
    ]);

    if (sectionWithPress.length === 0) {
      return res.status(204).json({ message: 'No section' });
    }

    res.status(200).json({
      sectionData: sectionWithPress[0],
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const postSection = async (req: Request, res: Response) => {
  const id = uuid.v4();
  try {
    const result = await SectionModel.create({
      id,
      ...req.body,
    });
    if (!result) res.status(204).json({ message: 'No section' });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
};
