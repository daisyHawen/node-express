exports.name = function() {
	console.log('test');
}
exports.sayHello = function(name) {
	console.log('hello' + name);
}
module.exports.sayBye = function() {
	console.log('Bye' + name);
};
module.exports = ['Lemmy Kilmister', 'Ozzy Osbourne', 'Ronnie James Dio', 'Steven Tyler', 'Mick Jagger'];