/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('comments', table => {
        table.increments('comment_id').primary();
        table.string('comment_content').notNullable();
        table.integer('user_id').unsigned().notNullable();
        table
            .foreign('user_id')
            .references('user_id')
            .inTable('users')
            .onDelete('CASCADE');
        table.integer('blog_id').unsigned().notNullable();
        table
            .foreign('blog_id')
            .references('blog_id')
            .inTable('blogs')
            .onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('comments');
};
