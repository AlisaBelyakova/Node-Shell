var Commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); 
  if (cmd === 'pwd') Commands.pwd();
  else if (cmd === 'date') {
    Commands.date();
  } else if (cmd === 'ls') Commands.ls();

});
