

module.exports = function(sails) {
    
    var execComamand = require('./lib/OrangeCommande.js');
    var install = require('./lib/install.js');

    return {
        execComamand,
        install
    };
};