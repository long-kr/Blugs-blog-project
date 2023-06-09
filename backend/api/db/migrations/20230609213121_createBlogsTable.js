/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * blog_status {0: draft, 1: published}
 * blog_tag {language}
 */

exports.up = function (knex) {
    return knex.schema.createTable('blogs', table => {
        table.increments('blog_id').primary();
        table.string('blog_title').notNullable();
        table.string('blog_content').notNullable();
        table.string('blog_tag');
        table.integer('blog_status').notNullable().defaultTo(1);
        table.integer('blog_view_number').unsigned();
        table.integer('user_id').unsigned().notNullable();
        table
            .foreign('user_id')
            .references('user_id')
            .inTable('users')
            .onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('blogs');
};
