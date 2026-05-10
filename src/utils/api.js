const getToken = () => localStorage.getItem('token');
export const registerUser = async ({ name, email, password }) => {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  return response.json();
};
export const loginUser = async (email, password) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};

export const getCountrySummary = async (name) => {
  const response = await fetch(`/api/country/${name}/summary`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return response.json();
};

export const getProfile = async () => {
  const response = await fetch('/api/profile', {
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return response.json();
};
