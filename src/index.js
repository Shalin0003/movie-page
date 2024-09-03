import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'
import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// createRoot(document.getElementById('root')).render(<App />);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);