import { Press } from './news';

export interface User {
  id: string;
  subscribingPresses: Press[];
}
