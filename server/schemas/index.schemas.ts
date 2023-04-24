import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { UserModel } from './user.schemas';
import { SectionModel, PressModel } from './news.schemas';

dotenv.config();

declare const process: {
  env: {
    NODE_ENV: string;
    CONNECT_URL: string;
  };
};

function connect() {
  mongoose.connect(process.env.CONNECT_URL).catch((err) => {
    console.error(err);
  });
}

export { connect, UserModel, SectionModel, PressModel };
