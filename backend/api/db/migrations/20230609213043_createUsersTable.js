/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * user_status: 0 = inactive, 1 = active
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('user_id').primary();
        table.string('user_name').notNullable().defaultTo('user');
        table.string('user_email').notNullable().defaultTo('example@email.com');
        table.string('user_password').notNullable().defaultTo('123456');
        table.string('user_picture').notNullable().defaultTo('default.jpg');
        table.integer('user_status').notNullable().defaultTo(1);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
