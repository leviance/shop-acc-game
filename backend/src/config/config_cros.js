const cors = require("cors");

const config_cros = (app) => {
  app.use(
    cors({
      origin: [
        `http://${process.env.CLIENT_URL}`,
        `https://${process.env.CLIENT_URL}`,
      ],
      credentials: true,
      exposedHeaders: ["set-cookie"],
    })
  );
};

module.exports = config_cros;
