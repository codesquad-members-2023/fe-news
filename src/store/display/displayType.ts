export interface ElementType {
  name: string;
  isActive: boolean;
}

export interface DisplayType {
  tab: ElementType[];
  view: ElementType[];
}
