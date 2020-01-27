const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = require("./config/key").mongoURI;
const chat = require("./routes/chat");
const Chat = require("./models/Chat");

app.use(bodyParser.json());
app.use("/api/chat", chat);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoose connect"))
  .catch(err => console.log(err));

const connections = [];

server.listen(80, () => console.log(`Server started on port 80`));

io.on("connection", socket => {
  connections.push(socket);

  Chat.find({}, (error, results) => {
    if (error) return console.log("error--", error);
    socket.emit("init", results);
  });

  socket.on("addMessage", newItem => {
    const newMessage = new Chat({
      message: newItem.message,
      userName: newItem.userName
    });

    newMessage.save((error, results) => {
      if (error) return console.log("error--", error);
      connections.forEach(subscribe => {
        subscribe.emit("messageAdded", results);
      });
    });
  });
});
