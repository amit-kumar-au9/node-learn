const http = require('http');
const server = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/') {
		res.write('Welcome to the homepage');
		res.end();
	} else if (req.url === '/user') {
		res.write('Hello user');
		res.end();
	}
});
server.listen(3000, () => console.log('Server is running'));
