// Update with your config settings.
const path = require('path');
require('dotenv').config();
const { DATABASE_URL, DEV_DATABASE_URL } = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'postgresql',
        connection: DEV_DATABASE_URL,
        migrations: {
            directory: path.join(__dirname, 'src', 'db', 'migrations')
        }
    }

    // production: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user: 'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // }
};
