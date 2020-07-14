import * as fs from "fs";
import * as jwt from 'jsonwebtoken';
import * as shortUrl from 'node-url-shortener';
import Config from '../../config/config';
import constants from "../../config/constants";

import pool from '../../database/database-connection';

var decode = require('unescape');

"use strict";
// const nodemailer = require("nodemailer");
class BaseController  {
    sendResponse(httpResp, statusFlag: boolean, statusCode: number, data: any, message: any) {
        const response = {
            'status': statusFlag ? 'SUCCESS' : 'FAILURE',
            'statusCode': statusCode < 200 ? statusCode = 200 : statusCode,
            'data': data,
            'message': message
        };
        if (httpResp) {
            httpResp.status(statusCode).json(response);
        }
    }

    
}
export default BaseController;