const session = require("express-session");
const MongoStore = require("connect-mongo");

const config_session = (app) => {
  let sess = {
    secret: process.env.SESSION_SECRET || "blackcat",
    resave: false,
    unset: "destroy",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      secure: false,
    },
    rolling: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      autoRemove: "native",
    }),
  };

  if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
  }

  app.use(session(sess));
};

module.exports = config_session;
