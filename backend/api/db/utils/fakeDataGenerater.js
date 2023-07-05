const { faker } = require('@faker-js/faker');

const generateRandomUser = count => {
    const users = [
        {
            user_name: 'Long Huynh',
            user_email: 'long7093@gmail.com',
            user_password: '123456',
            user_status: 1,
            user_picture: 'default.jpg',
            user_role: 'admin'
        }
    ];

    for (let i = 0; i < count; i++) {
        const user = {
            user_name: faker.internet.displayName(),
            user_email: faker.internet.email(),
            user_password: faker.internet.password(),
            user_status: 1,
            user_picture: faker.image.avatar(),
            user_role: 'user'
        };

        users.push(user);
    }

    return users;
};

const generateRandomBlog = count => {
    const blogs = [];

    for (let i = 0; i < count; i++) {
        const blog = {
            blog_title: faker.hacker.noun(),
            blog_content: faker.hacker.phrase(),
            blog_tag: faker.hacker.noun(),
            blog_status: 1,
            blog_view_number: faker.number.bigInt({ max: 5 }),
            user_id: faker.number.bigInt({ min: 1, max: 5 })
        };

        blogs.push(blog);
    }

    return blogs;
};

const generateRandomComment = count => {
    const comments = [];

    for (let i = 0; i < count; i++) {
        const comment = {
            comment_content: faker.hacker.phrase(),
            comment_status: 1,
            blog_id: faker.number.bigInt({ min: 1, max: 10 }),
            user_id: faker.number.bigInt({ min: 1, max: 5 })
        };

        comments.push(comment);
    }

    return comments;
};

module.exports = {
    generateRandomUser,
    generateRandomBlog,
    generateRandomComment
};
