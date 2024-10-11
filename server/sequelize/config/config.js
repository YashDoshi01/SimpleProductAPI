module.exports = {
  "development": {
    "url" : "postgresql://neondb_owner:KzvdO0p6yNmo@ep-snowy-smoke-a1ip3nj8.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        require: true,       // This will require SSL connection
        rejectUnauthorized: false // This allows self-signed certificates (set to true for more security)
      }
    }
  },
  "test": {

    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "url" : "postgresql://neondb_owner:KzvdO0p6yNmo@ep-snowy-smoke-a1ip3nj8.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
    "dialect": "mysql"
  }
}
