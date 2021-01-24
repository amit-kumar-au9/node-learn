// Create one api with node inbuilt package to display user system information
var os = require('os');

function osInfo() {
	var info = {
		platform: os.platform(),
		freeMemory: os.freemem(),
		totalMemory: os.totalmem(),
		arch: os.arch(),
		noOfCpus: os.cpus().length,
		releases: os.release(),
		version: os.version(),
		type: os.type(),
		userInfo: os.userInfo(),
	};
	return info;
}

console.log(osInfo());
