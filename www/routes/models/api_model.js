var enigmaJS = require('./enigma_machine.js');

module.exports.getCipher = function(encodedParamsObject, callback){

    var paramsObject = decodeURI(encodedParamsObject);

        var rotorI        = new enigmaJS.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
        var rotorIII      = new enigmaJS.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
        var rotorIV       = new enigmaJS.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
        var ukwB          = new enigmaJS.Umkehrwalze('YRUHQSLDPXNGOKMIEBFZCWVJAT');
        var steckerbrett  = new enigmaJS.Steckerbrett( 'AD CN ET FL GI JV KZ PU QY WX' );
        var etw           = new enigmaJS.Eintrittswalze('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

        var enigma = new enigmaJS.Enigma([rotorI, rotorIV, rotorIII], ukwB, steckerbrett, etw);


    if(paramsObject !== ""){
        callback(enigma.string(paramsObject));
        // callback('hello');
    }
    else{
        callback(null);
    }
};
