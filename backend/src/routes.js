import express from 'express';
import pointRouter from './modules/point/point.route';

const routes = express.Router();


routes.use("/point", pointRouter);

export default routes;