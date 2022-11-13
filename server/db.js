//this is our connection

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "C0d3rK!ns",
    host: "localhost",
    port: 5433,
    database: "perntodo"
});

module.exports = pool;