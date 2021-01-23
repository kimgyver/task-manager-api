const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOneId, userOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

// afterEach(() => {
//   console.log('afterEach');
// });

test('Should signup a new user', async () => {
  const response = await request(app)
    .post('/users')
    .send({
      name: 'Jason',
      email: 'jason@gmail.com',
      password: '1234567',
    })
    .expect(201);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assert about the response
  expect(response.body).toMatchObject({
    user: {
      name: 'Jason',
      email: 'jason@gmail.com',
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe('1234567');
});

test('Should login existing user', async () => {
  const response = await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(response.body).toMatchObject({
    user: {
      name: userOne.name,
      email: userOne.email,
    },
    token: user.tokens[1].token,
  });
});

test('Should not login nonexsistent user', async () => {
  await request(app)
    .post('/users/login')
    .send({ user: 'nonexsitent', password: '1234567' })
    .expect(400);
});

test('Should get profile for user', async () => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test('Should not get profile for unauthorized user', async () => {
  await request(app)
    .get('/users/me')
    //   .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(401);
});

test('Should delete account for user', async () => {
  const response = await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  // Assert user is removed from database
  const user = await User.findById(response.body._id);
  expect(user).toBeNull();
});

test('Should not delete account for unauthenticated user', async () => {
  await request(app)
    .delete('/users/me')
    //   .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(401);
});

test('Should upload avatar image', async () => {
  await await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('avatar', 'tests/fixtures/profile-pic.jpg')
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test('SHould update valid user fields', async () => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      age: 20,
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.age).toEqual(20);
});

test('Should not update invalid user fields', async () => {
  await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: 'Auckland',
    })
    .expect(400);
});

//
// User Test Ideas
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated
