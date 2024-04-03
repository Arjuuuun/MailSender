import {Router} from 'express';
import sendEmailRouter from './mail';

const router = Router();

const basePath = "/api/v1"

router.use(basePath, sendEmailRouter);


export default router
