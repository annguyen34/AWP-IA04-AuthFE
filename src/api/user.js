import axios from 'axios';

const API_URL = 'https://awp-ia-04-auth-be.vercel.app';
// const API_URL = 'http://localhost:3000';

// Function to handle user registration
export async function registerUser(username, email, password) {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to register user. Please try again');
  }
}

// Function to handle user login
export async function loginUser(username, password) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to login user. Please try again');
  }
}

export async function getUserProfile(token) {
  try {
    const response = await axios.get(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user profile. Please try again');
  }
}
