angular.module('enigma')
    .controller('HomepageCtrl', function($scope, ajaxService, cipher) {

        $scope.phrase = "";
        $scope.result = [];
        $scope.first = 1;
        $scope.second = 1;
        $scope.third = 1;

        // rotors for swapping and comparing
        //              1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
        alphabet =    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

        rotorOne =    ['O','E','S','Q','A','C','J','M','R','I','U','T','Z','W','D','G','K','Y','B','F','X','P','V','L','H','N'];
        rotorTwo =    ['B','T','G','F','O','I','A','R','P','J','Z','S','W','Q','K','E','V','X','D','M','H','L','Y','N','U','C'];
        rotorThree =  ['K','C','N','V','H','R','U','L','F','M','T','I','B','X','Q','A','O','G','D','P','J','S','Z','Y','W','E'];
        // rotorFour =   ['U','A','Q','J','E','G','V','F','M','I','Z','W','P','C','L','T','K','D','B','N','S','R','O','Y','H','X'];
        reflector =   ['Q','R','L','A','U','D','O','W','J','E','G','B','H','X','M','Z','N','I','C','T','Y','F','P','V','K','S'];


        // otherChars =  ",./?\"\';:!@#$%&0123456789";

        //function to keep track of the advancement of the rotors
        function rotation(){
            $scope.first++;
            if ($scope.first > 26){
                 $scope.first = $scope.first - 26;
                 $scope.second++;
            }
            if ($scope.second > 26){
                $scope.second = $scope.second - 26;
                $scope.third++;
            }
            if ($scope.third > 26){
                $scope.third = $scope.third - 26;
            }
        }

        //function to find index of letter in the regular alphabet and then to
        //swap it with the letter at the same index in the rotor supplied
        function encodeSingle(letter, rotor){
            var index;

            for (var i = 0; i < 26; i++){
                if (letter.toUpperCase() == alphabet[i]){
                    index = i;
                    break;
                }
            }
            //HERE IS WHERE THE NEXT STOP IS
            //NEED TO ADD THE ROTOR INDEX TO THIS AND THEN MAKE SURE THAT THE NUMBER
            //ENTERED INTO ROTOR[] IS UNDER 26 AND WILL ACCOUNT FOR WHAT HAPPENS
            //AFTER #26
            return rotor[index];
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
                    // result[i] = encodeSingle(encodeSingle(encodeSingle(phrase[i], rotorOne), rotorTwo), rotorThree);
                    result[i] = encodeSingle(phrase[i], rotorOne);
                    rotation();
                }
                // $scope.first++;
                // console.log($scope.first);
            }
            return result;
        }

        //variable as a function to call using angular when the form is submitted
        $scope.encrypt = function() {
            console.log($scope.first);
            var temp;
            temp= phraseEncode($scope.phrase);
            $scope.result = temp.join("");
        };

    });
