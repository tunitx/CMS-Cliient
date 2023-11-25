import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyComponent from './components/PageLayout';
import MyComponent2 from './components/PageLayout2';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MyComponent />} />
      <Route path="/about" element={<MyComponent2 />} />

    </Routes>
  );
}

export default App;
