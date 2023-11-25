import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PageLayout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post('https://cms-api-a10g.onrender.com/webhook')
      .catch(error => console.error('Error:', error));
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const allValues = JSON.parse(event.data);
      const values = allValues['Sheet1']; 
      setData(values);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'cyan', fontFamily : 'monospace',  }}>
    <h1 style={{ marginBottom: '30px', fontSize: '2.5rem', color: 'orange' }}>Sheet 1</h1>
    <Link to="/about"> <h2>/about page</h2></Link>
    {data.map((row, index) => (
      <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px',  borderBottom: '5px dotted black' }}>
        <h1 style={{ marginBottom: '10px', fontSize: '3.5rem' }}>{row[0]}</h1>
        <p style={{ marginBottom: '10px', fontSize: '1.5rem', paddingLeft: '100px', paddingRight : '100px' }}>{row[1]}</p>
        <p style={{ marginBottom: '10px', fontSize : '1.8rem', marginBottom : '50px'}}>{row[2]}</p>
        <img src={row[3]} alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50px', marginBottom : '50px' }} />
      </div>
    ))}
  </div>
  );
};

export default PageLayout;