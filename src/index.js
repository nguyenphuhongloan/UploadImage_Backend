const {PORT, ACCESS_TOKEN_SECRET} = require('./config/index');

const express = require('express');
const app = express();
const server = require('http').Server(app);
const routes = require('./routes/index');
const db = require('./config/database');
const cookieSession = require("cookie-session");
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
db.connect();
app.use(cookieParser());
app.use(cookieSession({
    keys: [ACCESS_TOKEN_SECRET],
    name: "session",
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
}));
app.get("/healCheck", (req, res) => {
    res.sendStatus(200);
})
app.use(routes);
app.get("/*", (req, res) => {
    res.sendStatus(404);
})
server.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
