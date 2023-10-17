import axios from 'axios';

export const getCultivators = async () => {
  try {
    const response = await axios.get('/api/cultivators');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCultivatorById = async (id) => {
  try {
    const response = await axios.get(`/api/cultivators/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCultivator = async (cultivatorData) => {
  try {
    const response = await axios.post('/api/cultivators', cultivatorData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCultivator = async (id, updatedData) => {
  try {
    const response = await axios.put(`/api/cultivators/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCultivator = async (id) => {
  try {
    const response = await axios.delete(`/api/cultivators/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};