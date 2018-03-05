//Output a prompt
//console.log(process)
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
var output = "";
    if (cmd === "pwd") {
        output = process.cwd();
    }
    if (cmd === "date") {
        var date = new Date();
        output += `${date.toDateString()} ${date.toTimeString()}`;
        //console.log(date);
    }
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');


});
