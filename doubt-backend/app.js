const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

// const authRouter = require('./routes/auth');
// const userRouter = require('./routes/user');

app.get('/health', (req, res) => {
	res.json({ status: 200, msg: 'Health ok' });
});

const userRouter = require('./routes/user');

app.use('/user', userRouter);

// app.use('/auth', authRouter);
// app.use('user', userRouter);

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server is running at port no ${PORT}`);
});
