const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/health', (_, res) => {
	res.status(200).send('Health Ok');
});

app.use('/', userRouter);
app.use('/admin', adminRouter);

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server is running on port ${port}`);
});
