const express = require('express');
require('dotenv').config();
const mainRouter = require('./routes/main-route');
const registerRouter = require('./routes/registration.route');
const cors = require('cors');
const db = require('./db');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.use(express.json());
app.use(mainRouter);
app.use(registerRouter);

const path = require('path');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/test', (req, res) => {
	res.status(200).send('Working');
});

io.on('connection', (socket) => {
	console.log('Some client connected');
	socket.on('chat', (message) => {
		console.log('From client: ', message);
		io.emit('chat', message);
	});
});

const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => {
	console.log(`listening at http://localhost:${PORT}`);
});
