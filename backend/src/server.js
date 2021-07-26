const app = require("express")();
const server = require("http").createServer(app);
const config_session = require("./config/config_session");
const init_routes = require("./api/index");
const bodyParser = require("body-parser");
const connect_DB = require("./config/connect_DB");

connect_DB();

config_session(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

init_routes(app);

server.listen(port, () => {
  console.log("server listening on port " + port);
});
