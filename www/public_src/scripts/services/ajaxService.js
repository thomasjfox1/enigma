angular.module('enigma')
    .service('ajaxService', function($http) {

            return {
                getEnigmaCipher : function(phrase) {
                    return $http.get('/api/getCipher/' + phrase)
                                .then(function(result){
                                    return result.data;
                                });
                }
            };
    });
