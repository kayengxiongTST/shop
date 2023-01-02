const pool = require('../databases/db')

class User {
    constructor(firstName, lastName, age) {
        this._firstName = firstName
        this._lastName = lastName
        this._age = age
    }
    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    get age() {
        return this._age
    }
    // get
    static async find() {
        const sql = 'SELECT * FROM users';
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }
    // insert
    async save() {
        const sql = `INSERT INTO users (first_name, last_name, age) VALUES ("${this.firstName}", "${this.lastName}", ${this.age})`;

        await pool.execute(sql);
    }

    static async findByIdAndUpdate(id, options) {
        const sql = `UPDATE users SET first_name = "${options.firstName}", last_name = "${options.lastName}", age = ${options.age} WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async findByIdAndDelete(id) {
        const sql = `DELETE FROM users WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async findById(id) {
        const sql = `SELECT * FROM users WHERE id = "${id}"`;
        const [rows, fields] = await pool.execute(sql);
        if (rows.length === 0) {
            return false
        }

        return rows[0];
    }

}

module.exports = User