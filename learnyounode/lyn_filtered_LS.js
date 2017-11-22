const fs = require('fs')

let ram = process.argv[2];

let path = require("path");

fs.readdir(ram, (err, files) => {
  if (err) console.log(err)
   let ff = files[1];
   let ext =path.extname(ff);
  files.forEach((file) => {
    if(path.extname(file) == ext)
    console.log(file);
  }
  )
}
)