 let http = require('http');
        let urll = [];
        
         urll.push(process.argv[2]);
        urll.push(process.argv[3]);
        urll.push(process.argv[4]);
        let results = []
        let count = 0

        function getURLdata (index) {
           
            http.get(urll[index], function(response){
                let data = {};
                data[index] = '';      
               
                response.setEncoding('utf-8');
                response.on('error', function(error){
                    console.log(error);
                }
                
    );
                response.on('data', function(chunk){
                    data[index] += chunk;
                }
                
    );
                     response.on('end', function(){
                    results[index] = data;
                    count++;
                    if (count == urll.length){
                        for (let i = 0; i < urll.length; i++){
                            console.log(results[i][i]);
                        } 
}
                });
});
}

        for (let i = 0; i < urll.length; i++)
            getURLdata(i);
        