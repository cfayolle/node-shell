//Output a prompt
//console.log(process)
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline

    var cmdArgs = cmd.split(" ");
    var input = cmdArgs.slice(1);

    var commandsObject = require('./commands');
    commandsObject[cmdArgs[0]](cmdArgs.slice(1));
    var commandsObject = require('./commands');
    setTimeout(function() { process.stdout.write('\nprompt > ')}, 0);
});
