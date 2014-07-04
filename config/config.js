module.exports = {
  root: process.env.PWD,
  port: process.env.PORT || 3000,
  sessionSecret: "digfypbzrcsxkvleqa",
  db: {
    development: "mongodb://localhost/transport-dev"
  }
};
