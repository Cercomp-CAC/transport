module.exports = {
  development: {
    root: process.env.PWD,
    port: process.env.PORT || 3000,
    sessionSecret: 'ftshovyjpglkznawcqxdubirme',
    db: 'mongodb://localhost:27017/transport-dev'
  },
  production: {
    root: process.env.PWD,
    port: process.env.PORT,
    sessionSecret: process.env.SESSION_SECRET,
    db: process.env.MONGOLAB_URI
  }
};
