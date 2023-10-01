module.exports = {
  port: 3306,
  mysqlUrl: process.env.DB_CONNECTION_STRING,
  HOST: "mysql.db.mdbgo.com",
  USER: "tzewah_root",
  PASSWORD: "Azd2020!",
  DB: "tzewah_testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
