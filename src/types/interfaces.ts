import { State } from './types';

export interface Model {
  setState(state: State): void;
  get state(): State;
}

export interface View {
  render(state: State): void;
  get element(): HTMLElement;
}

// Component는 좀더 유연하게 interface로만 관리
export interface Component {
  // private _model: Model;
  // private _view: View;
  // setState를 private 처리함으로써 상위 컴포넌트에서 하위 컴포넌트의 상태를 직접 조작하지 못하게 막음.
  // private setState(state: State): void;
  get element(): HTMLElement;
  attachTo(component: Component): void;
  get state(): State;
}
