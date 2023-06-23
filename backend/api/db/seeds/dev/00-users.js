/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            user_name: 'phantomkr',
            user_email: 'long7093@gmail.com',
            user_password: '123456',
            user_status: 1,
            user_picture: 'default.jpg',
            role: 'phantom'
        }
    ]);
};
