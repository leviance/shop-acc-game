const app = require('express')();
const http = require('http');

const config_session = require("./config/config_session");
const init_routes = require("./api/index");
const bodyParser = require('body-parser');
const connect_DB = require('./config/connect_DB');

const server = http.createServer(app);
const port = process.env.PORT || 3001;

config_session(app);
connect_DB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

init_routes(app);

server.listen(port, () => {
  console.log('server listening on port ' + port);
});