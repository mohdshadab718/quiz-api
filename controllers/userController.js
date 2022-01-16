const res = require("express/lib/response");

class Controller{
    getAll(req, res){
        res.send("All User");
    }
}

module.exports = new Controller();