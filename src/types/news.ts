export interface Press {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export type Category = string;

export interface Section {
  id: string;
  press: Press;
  articles: Article[];
  editDate: Date;
}

export interface Article {
  id: string;
  title: string;
  img?: string;
  link: string;
}
