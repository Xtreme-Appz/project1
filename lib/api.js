import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const getStrains = async () => {
  try {
    const response = await axios.get(`${API_URL}/strains`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCultivators = async () => {
  try {
    const response = await axios.get(`${API_URL}/cultivators`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDispensaries = async () => {
  try {
    const response = await axios.get(`${API_URL}/dispensaries`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};