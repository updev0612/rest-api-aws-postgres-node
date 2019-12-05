const PgConnection = require('postgresql-easy');
// const dbConfig = require('./config/db');
const pg = new PgConnection({
    //debug: true,
    host: 'rds-postgresql-kayomi-eu1.cbiicmimkihq.eu-west-1.rds.amazonaws.com',
    user: 'caoimhegrace',
    password: 'qazsedcft',
    database: 'Kayomi'
  });
// const pg = new PgConnection(dbConfig);
module.exports = pg;