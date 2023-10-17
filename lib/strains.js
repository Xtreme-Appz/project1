import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getStrains = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/strains`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStrainById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/strains/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStrain = async (strainData) => {
  try {
    const response = await axios.post(`${BASE_URL}/strains`, strainData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStrain = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/strains/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStrain = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/strains/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};