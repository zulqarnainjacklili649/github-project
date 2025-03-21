let fs = require('fs');
fs.readFile(__dirname + '/path_to_your_file', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
