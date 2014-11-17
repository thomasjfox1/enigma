angular.module('enigma')
    .service('ajaxService', function($http) {

            return {
                getEnigmaCipher : function(phrase, startOrder) {
                    return $http.get('/api/getCipher/' + phrase + '/' + startOrder)
                                .then(function(result){
                                    return result.data;
                                });
                }
            };
    });
