module.exports = {
  pwd: function (input) {
    process.stdout.write(process.cwd());
  },
  date: function (input) {
    var date = new Date();
    date = `${date.toDateString()} ${date.toTimeString()}`;
    process.stdout.write(date);
  },
  ls: function (input) {
    var fs = require('fs');
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "     ");
      })
    });
  },

  echo: function (input) {
    process.stdout.write(input.join(" "));
  },

  cat: function (input) {
    var path = `${input[0]}`
    var fs = require('fs');
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
    });
  },

  head: function (input) {
    var path = `${input[0]}`
    var fs = require('fs');
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      data = data.toString().split('\n').slice(0, 5).join('\n');
      process.stdout.write(data);
    });
  },

  tail: function (input) {
    var path = `${input[0]}`
    var fs = require('fs');
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      data = data.toString().split('\n').slice(-6).join('\n');
      process.stdout.write(data);
    });
  },

  curl: function (input) {
    var request = require('request');
    var site = `${input}`
    request(site, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      process.stdout.write('body:', body); // Print the HTML for the Google homepage.
    });

  }

}
