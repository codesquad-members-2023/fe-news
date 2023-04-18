import { Schema, model } from 'mongoose';

export interface PressInfoInterface {
  pid: string;
  pname: string;
  newMainLogo: string;
  newMainLightLogo: string;
  newMainDarkLogo: string;
  thumbnailValid: boolean;
  valid: boolean;
  isSubscribed: boolean;
}
export interface PressInterface {
  [key: string]: PressInfoInterface;
}

export type CategoryType = string;
export interface SectionInterface {
  id: string;
  pressId: string;
  lastEdited: Date;
  articles: ArticleInterface[];
  category: CategoryType;
}
export interface ArticleInterface {
  id: string;
  title: string;
  img: string;
  link: string;
}

export interface UserInterface {
  id: string;
  subscribingPressIds: string[];
}

const SectionSchema = new Schema<SectionInterface>({
  id: { type: String, required: true },
  pressId: { type: String, required: true },
  lastEdited: { type: Date, required: true },
  category: { type: String, required: true },
  articles: [
    {
      id: { type: String, required: true },
      title: { type: String, required: true },
      img: { type: String, required: false },
      link: { type: String, required: false },
    },
  ],
});

const UserSchema = new Schema<UserInterface>({
  id: { type: String, required: true },
  subscribingPressIds: [{ type: String, required: true }],
});

const PressSchema = new Schema<PressInfoInterface>({
  pid: { type: String, required: true },
  pname: { type: String, required: true },
  newMainLogo: { type: String, required: true },
  newMainLightLogo: { type: String, required: true },
  newMainDarkLogo: { type: String, required: true },
  thumbnailValid: { type: Boolean, required: true },
  valid: { type: Boolean, required: true },
  isSubscribed: { type: Boolean, required: true },
});

export const SectionModel = model<SectionInterface>('Sections', SectionSchema);
export const UserModel = model<UserInterface>('Users', UserSchema);
export const PressModel = model<PressInfoInterface>('Presses', PressSchema);
