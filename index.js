module.exports = function(sails) {

    var getWeather = require('./lib/getWeather.js');

    return {
        getWeather: getWeather
    };
};

/*
module.exports = function(sails) {
    
    var comm = require('./lib/OrangeCommande.js');
	var install = require('./lib/install.js');

    return {
        comm : comm,
		install : install
    };
};*/