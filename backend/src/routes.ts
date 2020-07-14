import * as express from 'express';
// Routes for the component/module
import customerRouter from './components/customer/customer.route';
const router = express();

router.use('/', customerRouter);

export default router;
