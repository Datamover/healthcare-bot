import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const fetchTrials = async () => {
    try {
      const res = await axios.post('http://localhost:8000/match_trials', {
        name: "Test Patient",
        age: 50,
        condition,
        location,
      });
      setResults(res.data);
    } catch (error) {
      console.error("Error fetching trials:", error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f7f9fc',
        padding: '2rem'
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}
      >
        <h1>🧠 AI Clinical Trial Finder</h1>
        <p>Find relevant clinical trials based on your health condition and location.</p>

        <input
          type="text"
          placeholder="Condition (e.g. diabetes)"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />

        <input
          type="text"
          placeholder="Location (e.g. Chicago)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />

        <button
          onClick={fetchTrials}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Search Clinical Trials
        </button>

        {results.length > 0 && (
          <div style={{ marginTop: '2rem', textAlign: 'left' }}>
            <h3>🔎 Matching Trials:</h3>
            <ul>
              {results.map((r, i) => (
                <li key={i} style={{ marginBottom: '1rem' }}>
                  <strong>{r.trial_name}</strong> – {r.location}<br />
                  <em>{r.eligibility}</em>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
