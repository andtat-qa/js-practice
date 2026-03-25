const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com';

describe('Test 1: GET post by ID', () => {
  test('should get a post by ID with status 200', async () => {
    const response = await axios.get(`${API_URL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('userId');
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
    expect(response.data.id).toBe(1);

  });
});

describe('Test 2: CREATE new post', () => {
  test('should create a new post with status 201', async () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post body'
    };

    const response = await axios.post(`${API_URL}/posts`, newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.id).toBeDefined();
  });
});

describe('Test 3: UPDATE post', () => {
  test('should update a post with status 200', async () => {
    const updatedPost = {
      id: 1,
      title: 'Updated Title',
      body: 'Updated body content',
      userId: 1
    };

    const response = await axios.put(`${API_URL}/posts/1`, updatedPost);

    expect(response.status).toBe(200);
    expect(response.data.title).toBe(updatedPost.title);
    expect(response.data.body).toBe(updatedPost.body);
    expect(response.data.id).toBe(1);
  });
});

describe('Test 4: DELETE post', () => {
  test('should delete a post with status 200', async () => {
    const response = await axios.delete(`${API_URL}/posts/1`);

    expect(response.status).toBe(200);
  });
});