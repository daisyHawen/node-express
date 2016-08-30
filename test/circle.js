function area(radius) {
	console.log('area');
	return Math.PI * radius * radius;
}

function circumference(radius) {
	console.log('circumference');
	return 2 * Math.PI * radius;
}
// module.exports = area;
module.exports = circumference;
//两个是没有用的，只有最后一个有用