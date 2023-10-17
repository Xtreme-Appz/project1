```javascript
import axios from 'axios';

const getUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await axios.post('/api/users', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
```