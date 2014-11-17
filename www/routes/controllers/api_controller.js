var apiModel = require('../models/api_model');

module.exports.controller = function(httpApp){


//change the name of /:param in order to pass more stuff in
    httpApp.get('/api/getCipher/:param', function(request, response){

        var paramsObject = request.params.param;

        try{
            response.setHeader('Content-Type', 'application/json');

            apiModel.getCipher(paramsObject, function(results){
                response.send(results);
            });
        }
        catch (exception){
            response.send(exception + '');
        }
    });

};
