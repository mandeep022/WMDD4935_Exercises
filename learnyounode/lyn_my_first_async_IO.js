let fs = require('fs'),
    fl = process.argv[2],
    lines;

fs.readFile(fl, function (err, data) {
    arr = data.toString().split('\n').length - 1;

    console.log(arr);
}
);