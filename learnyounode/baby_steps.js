
var total=0;
var args=process.argv;

for(var i = 2; i< args.length;i++)

{
total = total + Number(process.argv[i]);
}

console.log(total);