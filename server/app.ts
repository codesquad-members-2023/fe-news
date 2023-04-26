import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from './schemas/index.schemas';
import { router as NewsRouter } from './routes/news.router';
import { router as UserRouter } from './routes/user.router';

export const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());
connect();

app.use('/', [NewsRouter, UserRouter]);

app.listen(port, () => {
  console.log(`start ${port}`);
});
