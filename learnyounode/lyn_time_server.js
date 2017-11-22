 let net = require('net')
  
 
    function check (i) {
      return (i < 10 ? '0' : '') + i
 
    }
    
    function now () {
      var dte = new Date()
      return dte.getFullYear() + '-' +
        check(dte.getMonth() + 1) + '-' +
        check(dte.getDate()) + ' ' +
        check(dte.getHours()) + ':' +
        check(dte.getMinutes())
 
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
}
)
    
    server.listen(Number(process.argv[2]))