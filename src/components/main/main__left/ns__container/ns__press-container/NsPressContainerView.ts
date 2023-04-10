import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class NsPressContainerView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="py-2 flex-auto border border-blue-500 flex flex-row justify-between items-center">
                                         <button id="btn-prev" class=""><</button>
                                         <ul id="ns__grid-container" class="grid grid-cols-6 grid-rows-4 w-full h-full">
                                           <li class="border border-blue-100">1</li>
                                           <li class="border border-blue-100">2</li>
                                           <li class="border border-blue-100">3</li>
                                           <li class="border border-blue-100">4</li>
                                           <li class="border border-blue-100">5</li>
                                           <li class="border border-blue-100">6</li>
                                           <li class="border border-blue-100">7</li>
                                           <li class="border border-blue-100">8</li>
                                           <li class="border border-blue-100">9</li>
                                           <li class="border border-blue-100">10</li>
                                           <li class="border border-blue-100">11</li>
                                           <li class="border border-blue-100">12</li>
                                           <li class="border border-blue-100">13</li>
                                           <li class="border border-blue-100">14</li>
                                           <li class="border border-blue-100">15</li>
                                           <li class="border border-blue-100">16</li>
                                           <li class="border border-blue-100">17</li>
                                           <li class="border border-blue-100">18</li>
                                           <li class="border border-blue-100">19</li>
                                           <li class="border border-blue-100">20</li>
                                           <li class="border border-blue-100">21</li>
                                           <li class="border border-blue-100">22</li>
                                           <li class="border border-blue-100">23</li>
                                           <li class="border border-blue-100">24</li>
                                         </ul>                                      
                                         <button id="btn-next" class="">></button>
                                       </section>`;
  }

  render(state: State) {
    return;
  }
}
