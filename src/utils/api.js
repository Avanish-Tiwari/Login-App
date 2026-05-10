const BASE_URL = import.meta.env.VITE_API_URL || '';
const getToken = () => localStorage.getItem('token');

export const registerUser = async (name, email, password) => {
  const response = await fetch(`${BASE_URL}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};

export const getCountrySummary = async (name) => {
  const response = await fetch(`${BASE_URL}/api/country/${name}/summary`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return response.json();
};

export const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/api/profile`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return response.json();
};