var Nfc = function(){},
    dummy = function(){},
    genericError = function(err){ console.error(err); };

Nfc.prototype.sayHello = function(){
    console.log('hello');
};


module.exports = new Nfc();
