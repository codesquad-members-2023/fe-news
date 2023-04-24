import express from 'express';
const router = express.Router();
import {
  getCustomSection,
  getPress,
  getRollingNews,
  getSection,
  postPress,
  postSection,
} from './controllers/news';

router.get('/press', getPress);
router.post('/press', postPress);
router.get('/rolling-news', getRollingNews);
router.get('/section', getSection);
router.get('/custom-section', getCustomSection);
router.post('/section', postSection);

export { router };
