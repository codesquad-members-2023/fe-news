import { Schema, model } from 'mongoose';

export interface PressInterface {
  id: string;
  name: string;
  logo: string;
  category: string;
}
export interface SectionInterface {
  id: string;
  pressId: PressInterface['id'];
  lastEdited: string;
  articles: ArticleInterface[];
}
export interface ArticleInterface {
  id: { type: String; required: true };
  title: string;
  img: string;
  link: string;
  sectionId: SectionInterface['id'];
}
export interface UserInterface {
  id: string;
  subscribingPresses: PressInterface[];
}

const PressShema = new Schema<PressInterface>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  logo: { type: String, required: true },
  category: { type: String, required: true },
});
const SectionShema = new Schema<SectionInterface>({
  id: { type: String, required: true },
  pressId: { type: String, required: true },
  lastEdited: { type: String, required: true },
});
const ArticleShema = new Schema<ArticleInterface>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: false },
  link: { type: String, required: true },
  sectionId: { type: String, required: true },
});
const UserShema = new Schema<UserInterface>({
  id: { type: String, required: true },
  subscribingPresses: { type: [PressShema], required: true },
});

export const PressModel = model<PressInterface>('Presses', PressShema);
export const SectionModel = model<SectionInterface>('Sections', SectionShema);
export const ArticleModel = model<ArticleInterface>('Articles', ArticleShema);
export const UserModel = model<UserInterface>('Users', UserShema);
