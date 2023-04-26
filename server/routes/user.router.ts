import express from 'express';
const router = express.Router();
import { getUser, subsrcibe, unsubsrcibe } from './controllers/user';

router.get('/user', getUser);
router.patch('/subscribe', subsrcibe);
router.patch('/unsubscribe', unsubsrcibe);

export { router };
