// Update with your config settings.
const path = require('path');
require('dotenv').config();
const { DATABASE_URL, DATABASE_URL_DEVELOPMENT } = process.env;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'postgresql',
        connection: DATABASE_URL_DEVELOPMENT,
        migrations: {
            directory: path.join(__dirname, 'api', 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'api', 'db', 'seeds', 'dev')
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
