var fs = require('fs');
var Commands = {};
Commands.pwd = function () {
    process.stdout.write(process.argv[1].slice(0,-8));
    process.stdout.write("prompt > ");
} 
Commands.date = function () {
    var newDate = new Date();
    process.stdout.write(newDate);
    process.stdout.write("prompt > ");
} 
Commands.ls = function () {
    fs.readdir ('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    });
}
module.exports = Commands;