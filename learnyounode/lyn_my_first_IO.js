var fs = require('fs');

var mdp = fs.readFileSync(process.argv[2]);

 var file = mdp.toString();

    var content = file.split("\n");

   console.log(content.length-1);
   
   