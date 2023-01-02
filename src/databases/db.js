const mysql = require('mysql2/promise');
const { DB_USERNAME_PASSWORD, DB_NAME, DB_USERNAME, DB_HOST, DB_PORT } = require('../../config');

const connectionOptions = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_USERNAME_PASSWORD
};

const pool = mysql.createPool(connectionOptions);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();

        console.log('MySQL database connected!');
    } catch (err) {
        console.log('MySQL database connection error!');

        process.exit(1);
    }
};

connectToMySQL().then();

module.exports = pool;
