import BaseController from '../../shared/controller/BaseController';

import CustomerRepository from './customer.repository';
import pool from '../../database/database-connection';


const customerRepository = new CustomerRepository();

class CustomerController extends BaseController {
   
    constructor() {
        super();
       
    }
    
    // Search user
    async getSMS(req, res, next) {
       // console.log(req);
        customerRepository.getCustomers(req, (err, rows) => {
            if (err) {
                console.log("adfd",err);
                return next(err);
            }
            else {
                //console.log("sdf rows-->",JSON.parse(rows));
                this.sendResponse(res, true, 200, { customerDetails: rows, message: "Customer profile fetched sucessfully" }, '');
            }
        });
    }
    
}
export default CustomerController;