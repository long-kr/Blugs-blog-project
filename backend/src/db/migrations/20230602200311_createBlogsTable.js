/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('blogs', table => {
        table.increments('blog_id').primary();
        table.string('title');
        table.string('content');
        table.string('status');
        table.number('views');
        table.string('image');
        table.string('category');
        table.string('tags');
        table.string('author');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
