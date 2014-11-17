var apiModel = require('../models/api_model');

module.exports.controller = function(httpApp){


//change the name of /:param in order to pass more stuff in
    httpApp.get('/api/getCipher/:paramPhrase/:paramStart', function(request, response){

        var paramPhraseObject = request.params.paramPhrase;
        var paramStartObject = request.params.paramStart;

        try{
            response.setHeader('Content-Type', 'application/json');

            apiModel.getCipher(paramPhraseObject, paramStartObject, function(results){
                response.send(results);
            });
        }
        catch (exception){
            response.send(exception + '');
        }
    });

};
