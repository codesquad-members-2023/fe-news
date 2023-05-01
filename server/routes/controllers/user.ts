import { PressModel, UserModel } from '../../schemas/index.schemas';
import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
  const id = req.query.id;
  try {
    const result = await UserModel.find({
      id,
    });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
};

export const subsrcibe = async (req: Request, res: Response) => {
  const id = req.query.id;
  const pressId = req.query.pressId;
  if (!id || !pressId)
    return res.status(400).json({ message: 'Wrong request' });
  try {
    const result = await UserModel.updateOne(
      { id },
      { $push: { subscribingPressIds: pressId } }
    );
    await PressModel.updateOne({ pid: id }, { $push: { isSubscribed: true } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const unsubsrcibe = async (req: Request, res: Response) => {
  const id = req.query.id;
  const pressId = req.query.pressId;
  if (!id || !pressId)
    return res.status(400).json({ message: 'Wrong request' });
  try {
    const result = await UserModel.updateOne(
      { id },
      { $pull: { subscribingPressIds: pressId } }
    );
    await PressModel.updateOne({ pid: id }, { $push: { isSubscribed: false } });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
};
