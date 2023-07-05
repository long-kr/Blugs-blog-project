const { generateRandomUser } = require('../../utils/fakeDataGenerater');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    await knex('users').insert(generateRandomUser(5));
};
