const { generateRandomBlog } = require('../../utils/fakeDataGenerater');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE blogs RESTART IDENTITY CASCADE');
    await knex('blogs').insert(generateRandomBlog(10));
};
