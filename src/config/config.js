module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'MusicTracker',
    user: process.env.DB_USER || 'MusicTracker',
    password: process.env.DB_PASS || 'MusicTracker',  
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './MusciTracker.sqlite'
    }
  }
}
