import { useState } from 'react';
import { getCountrySummary } from '../utils/api';

export default function Dashboard({ onLogout }) {
  const [country, setCountry] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!country.trim()) return;
    setLoading(true);
    setError('');
    setData(null);

    const result = await getCountrySummary(country);

    if (result.error) {
      setError(result.error);
    } else {
      setData(result);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Country Explorer</h2>
        <button
          onClick={onLogout}
          style={{ padding: '0.4rem 1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', margin: '1.5rem 0' }}>
        <input
          type="text"
          placeholder="Enter country name..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{ padding: '0.5rem 1rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? '...' : 'Search'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem' }}>
          <img src={data.flag} alt={data.country} style={{ width: '80px', marginBottom: '1rem' }} />
          <h3>{data.country.toUpperCase()}</h3>
          <p><strong>Capital:</strong> {data.capital}</p>
          <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
          <p><strong>Currency:</strong> {data.currency}</p>
        </div>
      )}
    </div>
  );
}