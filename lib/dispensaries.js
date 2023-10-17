import axios from 'axios';

export const getDispensaries = async () => {
  try {
    const response = await axios.get('/api/dispensaries');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDispensaryById = async (id) => {
  try {
    const response = await axios.get(`/api/dispensaries/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDispensary = async (dispensaryData) => {
  try {
    const response = await axios.post('/api/dispensaries', dispensaryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDispensary = async (id, updatedData) => {
  try {
    const response = await axios.put(`/api/dispensaries/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDispensary = async (id) => {
  try {
    const response = await axios.delete(`/api/dispensaries/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};