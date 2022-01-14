const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/chat.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});