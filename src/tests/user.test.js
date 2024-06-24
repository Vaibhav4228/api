const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); 
const User = require('../models/userModel'); 


beforeAll(async () => {
  await mongoose.connect(process.env.DB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await User.deleteMany({});
});

describe('User API', () => {
  
  it(' create a new user', async () => {
    const res = await request(app)
      .post('/api/worko/user')
      .send({
        email: 'jhonny@example.com',
        name: 'Joy Hood',
        age: 50,
        city: 'Delhi',
        zipCode: '10001',
        password: 'joy123',
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });


});
