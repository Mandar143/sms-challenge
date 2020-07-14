import * as mysql from 'mysql2';

export default class CustomerRepository {

    

    async getCustomers(req, callback: any) {
        

        var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "tendulkar",
        database: "sms_db"
        });
        try {
            //let results;
            
            con.connect(function(err) {
                if (err){
                   return callback({ message: err.mesage })
                }else{
                    con.query("SELECT * FROM city_info", function (err, result, fields) {
                        if (err) {
                            return callback({ message: err.mesage })
                        };
                        return callback(null, result);
                      });
                } 

                
            });
           
        } catch (error) {
            return callback({ message: error.mesage })
        }
    }


}