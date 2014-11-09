angular.module('enigma')
    .controller('HomepageCtrl', function($scope, ajaxService, cipher) {

        $scope.headerSize = null;
        $scope.subTitleSize = null;
        $scope.titleBGColor = '#555';

        $scope.colorOptions = ['#002635', '#013440', '#AB1A25', '#D97925'];

        // ajaxService.getAppTitle().then(function(results){
        //     $scope.mainTitle = results;
        //     $scope.engima = results;
        // });

        $scope.phrase = "";
        $scope.result = [];

        //              1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
        alphabet =    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        rotorOne =    ['O','E','S','Q','A','C','J','M','R','I','U','T','Z','W','D','G','K','Y','B','F','X','P','V','L','H','N'];
        rotorTwo =    ['B','T','G','F','O','I','A','R','P','J','Z','S','W','Q','K','E','V','X','D','M','H','L','Y','N','U','C'];
        rotorThree =  ['K','C','N','V','H','R','U','L','F','M','T','I','B','X','Q','A','O','G','D','P','J','S','Z','Y','W','E'];
        rotorFour =   ['U','A','Q','J','E','G','V','F','M','I','Z','W','P','C','L','T','K','D','B','N','S','R','O','Y','H','X'];
        reflector =   ['Q','R','L','A','U','D','O','W','J','E','G','B','H','X','M','Z','N','I','C','T','Y','F','P','V','K','S'];

        $scope.encrypt = function() {
            var temp;

            console.log("this is good");
            temp= phraseEncode($scope.phrase);
            $scope.result = temp.join("");
        };

        function encode(letter, rotor){
          console.log('yayayay');
            var index;
            for (var i = 0; i < 26; i++){
                console.log('wahooo');
                if (letter.toUpperCase() == alphabet[i]){
                    index = i;
                    break;
                }
            }
            console.log(rotor[index]);
            return rotor[index];
        }

        function phraseEncode(phrase){
            var result = [];
            for(var i = 0, len = phrase.length; i < len; i++){
              console.log(phrase.length);
                if (phrase[i] == ' '){
                  console.log('noooo');
                    result[i] = ' ';
                }
                else {
                  console.log('yesss');
                    result[i] = encode(phrase[i], rotorOne);
                    console.log(result[i]);
                }
            }
            return result;
        }

        // var result = encode('x', rotorFirst);
        // console.log(result);
        // result = encode(result, rotorSecond);
        // console.log(result);
        // result = encode(result, rotorThird);
        // console.log(result);
        // result = encode(result, reflector);
        // console.log(result);
        // result = encode(result, rotorThird);
        // console.log(result);
        // result = encode(result, rotorSecond);
        // console.log(result);
        // result = encode(result, rotorFirst);
        // console.log(result);

        // result = phraseEncode('HELLO WORLD I AM ALIVE');
        // console.log(result);


        // console.log('hello');

        // encypt = function(rotorOne, rotorTwo, rotorThree, input, plugboard) {

        // };

    });
