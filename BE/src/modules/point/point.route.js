import express from 'express';
import {getAllPoint} from './point.service';

const pointRouter = express.Router();


pointRouter.get('/', getAllPoint)




export default pointRouter;