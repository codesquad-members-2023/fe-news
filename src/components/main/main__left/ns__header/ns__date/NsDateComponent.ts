import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsDateModel } from '@components/main/main__left/ns__header/ns__date/NsDateModel.js';
import { NsDateView } from '@components/main/main__left/ns__header/ns__date/NsDateView.js';
import { getKrDate } from '@utils/date.js';

export class NsDateComponent implements TempComponent {
  private _model: NsDateModel;
  private _view: NsDateView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsDateModel();
    this._view = new NsDateView(this.$target);

    const date = getKrDate('ko-KR', new Date());
    this.setState({ date });
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
