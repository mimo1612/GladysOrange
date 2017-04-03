module.exports = function execCommand(){
	
	return new Promise(function(resolve,reject){
			var url = 'http://dcodeurtv4-1.home:8080/remoteControl/cmd?operation=01&key=164&mode=0';
			request(url);
	}
}