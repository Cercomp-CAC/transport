module.exports = {
  development: {
    root: process.env.PWD,
    port: process.env.PORT || 3000,
    sessionSecret: "digfypbzrcsxkvleqa",
    db: "mongodb://localhost/transport-dev"
  },
  production: {
    root: process.env.PWD,
    port: process.env.PORT || 3000,
    sessionSecret: "digfypbzrcsxkvleqa",
    db: "mongodb://heroku_app26348462:rd6mtt1tq3a9v3r032k7a938lb@ds047107.mongolab.com:47107/heroku_app26348462"
  }
};
