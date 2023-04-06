import { State } from './types';

export interface Model {
  // private _state: State;
  setState(state: State): void;
  get state(): State;
}

export interface View {
  // private _template: string;
  // private _templateElement: HTMLTemplateElement;
  // private _element: HTMLElement;
  // private setTemplate(state: State): void;
  render(state: State): void;
  get element(): HTMLElement;
}

export interface Component {
  // private _model: Model;
  // private _view: View;
  // private _element: HTMLElement;
  setState(state: State): void;
  get state(): State;
  get element(): HTMLElement;
}
