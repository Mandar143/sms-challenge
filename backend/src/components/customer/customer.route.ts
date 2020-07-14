import * as express from 'express';

import CustomerController from './customer.controller';

let router = express();


const objUserCtrl = new CustomerController();

// Get customer
router.get('/smsInfo',(req, res, next) => {
    objUserCtrl.getSMS(req, res, next);
});


export default router;