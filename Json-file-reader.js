var fs = require("fs");

module.exports = {
    readFile: function(path, callback) {
        fs.readFile(path, function(error, data) {
            return callback(error, JSON.parse(data));
        });
    }
}; 