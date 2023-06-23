const fake = require('faker');

export const generateRandomUser = count => {
    const users = [
        {
            user_name: 'Long Huynh',
            user_email: 'long7093@gmail.com',
            user_password: '123456',
            user_status: 'active',
            user_picture: 'default.jpg'
        }
    ];

    for (let i = 0; i < count; i++) {
        const user = {
            user_name: fake.internet.displayName(),
            user_email: fake.internet.email(),
            user_password: fake.internet.password(),
            user_status: fake.random.number({ min: 0, max: 1 }),
            user_picture: fake.image.avatar(),
            user_role: 'user'
        };

        users.push(user);
    }
};
