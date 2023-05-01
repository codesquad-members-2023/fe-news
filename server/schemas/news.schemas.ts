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
  press: PressInfoInterface;
}
export interface ArticleInterface {
  id: string;
  title: string;
  img: string;
  link: string;
}

const SectionSchema = new Schema<SectionInterface>({
  id: { type: String, required: true },
  pressId: { type: String, required: true },
  lastEdited: { type: Date, required: true },
  category: { type: String, required: true },
  press: {
    pid: { type: String, required: true },
    pname: { type: String, required: true },
    newMainLogo: { type: String, required: true },
    newMainLightLogo: { type: String, required: true },
    newMainDarkLogo: { type: String, required: true },
    thumbnailValid: { type: Boolean, required: true },
    valid: { type: Boolean, required: true },
    isSubscribed: { type: Boolean, required: true },
  },
  articles: [
    {
      id: { type: String, required: true },
      title: { type: String, required: true },
      img: { type: String, required: false },
      link: { type: String, required: false },
    },
  ],
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

SectionSchema.index({ category: 1 });

export const SectionModel = model<SectionInterface>('Sections', SectionSchema);
export const PressModel = model<PressInfoInterface>('Presses', PressSchema);
