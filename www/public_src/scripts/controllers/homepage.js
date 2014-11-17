angular.module('enigma')
    .controller('HomepageCtrl', function($scope, ajaxService) {

        $scope.phrase = "";
        $scope.result = [];

        $scope.encrypt = function(){
            ajaxService.getEnigmaCipher($scope.phrase).then(function(results){
                $scope.result = results;
            });
        };


        // $scope.first = 0;
        // $scope.second = 0;
        // $scope.third = 0;

        /*

        // rotors for swapping and comparing
        //                  0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
        alphabet =        ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

        rotorOne =        ['E','K','M','F','L','G','D','Q','V','Z','N','T','O','W','Y','H','X','U','S','P','A','I','B','R','C','J'];
        rotorTwo =        ['A','J','D','K','S','I','R','U','X','B','L','H','W','T','M','C','Q','G','Z','N','P','Y','F','V','O','E'];
        rotorThree =      ['B','D','F','H','J','L','C','P','R','T','X','V','Z','N','Y','E','I','W','G','A','K','M','U','S','Q','O'];
        // rotorFour =    ['E','S','O','V','P','Z','J','A','Y','Q','U','I','R','H','X','L','N','F','T','G','K','D','C','M','W','B'];
        // rotorFive =    ['V','Z','B','R','G','I','T','Y','U','P','S','D','N','H','L','X','A','W','M','J','Q','O','F','E','C','K'];
        reflectorPlate =  ['Y','R','U','H','Q','S','L','D','P','X','N','G','O','K','M','I','E','B','F','Z','C','W','V','J','A','T'];


        // otherChars =  ",./?\"\';:!@#$%&0123456789";

        function control(phrase){
            var encrypted = [];
            for(var i=0, len=phrase.length; i < len; i++){
                //catch for spaces
                if (phrase[i] == ' '){
                    encrypted[i] = phrase[i];
                }
                else {
                    var letter = phrase[i];
                    console.log('\nnext letter: ' + letter);
                    letter = switchLetter(letter, rotorOne);
                    console.log('first switch: ' + letter);
                    letter = switchLetter(letter, rotorTwo);
                    console.log('second switch: ' + letter);
                    letter = switchLetter(letter, rotorThree);
                    console.log('third switch: ' + letter);
                    letter = reflector(letter);
                    console.log('reflector: ' + letter);
                    letter = switchLetter(letter, rotorThree);
                    console.log('fifth switch: ' + letter);
                    letter = switchLetter(letter, rotorTwo);
                    console.log('sixth switch: ' + letter);
                    letter = switchLetter(letter, rotorOne);
                    console.log('seventh switch: ' + letter +"\n");
                    rotation();
                    encrypted[i] = letter;
                }
            }
            return encrypted;
        }

        function switchLetter(letter, rotor){
            var index = compareAlpha(letter);
            // console.log('letter alpha index: ' + index);
            // var adjIndex = rotorIndex(rotor, index);
            // console.log('adjusted index: ' + adjIndex);
            // console.log(rotor[adjIndex]);
            return rotor[index];
            // return rotor[adjIndex];
        }

        function reflector(letter){
            var index = compareAlpha(letter);
            return reflectorPlate[index];

        }

        function rotorIndex(rotor, index) {
            var temp;
            if (rotor == rotorOne){
                // console.log('rotorone');
                temp = index - $scope.first;
                // temp = $scope.first + index;
                if (temp < 0) {
                    return temp + 26;
                }
                // if (temp > 25){
                //     return temp - 25;
                // }
                else {
                    return temp;
                }
            }
            else if (rotor == rotorTwo){
                // console.log('rotortwo');
                temp = index - $scope.second;
                if (temp < 0) {
                    return temp + 26;
                }
                else {
                    return temp;
                }
            }
            else if (rotor == rotorThree){
                // console.log('rotorthree');
                temp = index - $scope.third;
                if (temp < 0) {
                    return temp + 26;
                }
                else {
                    return temp;
                }
            }
        }

        //function to find index of letter in the regular alphabet
        function compareAlpha(letter){
            for (var i = 0; i < 26; i++){
                if (letter.toUpperCase() == alphabet[i]){
                    return i;
                }
            }
        }

        //function to keep track of the advancement of the rotors
        function rotation(){
            $scope.first++;
            if ($scope.first > 25){
                 $scope.first = $scope.first - 26;
                 $scope.second++;
            }
            if ($scope.second > 25){
                $scope.second = $scope.second - 26;
                $scope.third++;
            }
            if ($scope.third > 25){
                $scope.third = $scope.third - 26;
            }
        }




















        // function to swap letter with the letter at the same index in the rotor supplied
        function encodeSingle(letter, rotor){
            var index;

            //HERE IS WHERE THE NEXT STOP IS
            //NEED TO ADD THE ROTOR INDEX TO THIS AND THEN MAKE SURE THAT THE NUMBER
            //ENTERED INTO ROTOR[] IS UNDER 26 AND WILL ACCOUNT FOR WHAT HAPPENS
            //AFTER #26

            var temp;

            if(rotor == rotorOne){
                index = compareAlpha(letter);
                index = index + $scope.first - 1;
                if(index >= 26){
                  index = index - 26;
                }
                temp = rotor[index];
                console.log("one " + index);
                // console.log("one " + temp);
            }
            else if(rotor == rotorTwo){
                index = compareAlpha(letter);
                index = index + $scope.second - 1;
                if(index >= 26){
                  index = index - 26;
                }
                temp = rotor[index - 1];
                console.log("two " + index);
                // console.log("two " + temp);
            }
            else if(rotor == rotorThree){
                index = compareAlpha(letter);
                index = index + $scope.third - 1;
                if(index >= 26){
                  index = index - 26;
                }
                temp = rotor[index - 1];
                console.log("thr " + index);
                // console.log("thr " + temp);
            }


            return temp;
        }


        //function to iterate through a string and will send each letter in
        //for encryption
        function phraseEncode(phrase){
            len = phrase.length;
            // console.log(len);

            var result = [];

            for(var i = 0; i < len; i++){
                if (phrase[i] == ' '){
                    result[i] = ' ';
                }
                // else if (punctuation.prototype.contains(phrase[i])){
                //     result[i] = phrase[i];
                // }
                else {
                    result[i] = encodeSingle(encodeSingle(encodeSingle(phrase[i], rotorOne), rotorTwo), rotorThree);
                    // result[i] = encodeSingle(phrase[i], rotorOne);
                    rotation();

                }
                // $scope.first++;
                // console.log($scope.first);
            }
            return result;
        }

        //variable as a function to call using angular when the form is submitted
        $scope.encrypt = function() {
            var temp;
            temp = control($scope.phrase);
            // temp = phraseEncode($scope.phrase);
            $scope.result = temp.join("");
        };

*/

    });
