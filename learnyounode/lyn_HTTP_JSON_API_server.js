let urll = require('url')
let http = require('http')

 
              function parsetime (time) {
                    return {
                  hour: time.getHours(),
                  minute: time.getMinutes(),
                  second: time.getSeconds()
  }
}
 
                      function unixtime (time) {
                             return { unixtime : time.getTime() }
}
 
        let ser = http.createServer(function (req, res) {
        let parsedUrl = urll.parse(req.url, true)
        let time = new Date(parsedUrl.query.iso)
        let reslt
 
  if (/^\/api\/parsetime/.test(req.url))
    reslt = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    reslt = unixtime(time)
 
  if (reslt) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(reslt))
  } else {
    res.writeHead(404)
    res.end()

  }

          
          
        })


ser.listen(Number(process.argv[2]))