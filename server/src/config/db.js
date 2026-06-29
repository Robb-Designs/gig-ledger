//setting dns for debugging
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;