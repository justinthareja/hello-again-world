const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

var nicknames = {};

io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        io.emit("user disconnect", nicknames[socket.id]);
    });

    socket.on("chat message", (msg) => {
        const nickname = nicknames[socket.id];
        io.emit("chat message", { msg, nickname });
    });

    socket.on("add nickname", (nickname) => {
        nicknames[socket.id] = nickname;
        io.emit("user connect", nickname);
    });

});

http.listen(3000, () => {
    console.log("listening on *:3000");
});