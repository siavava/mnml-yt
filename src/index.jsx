import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './style.scss';

// function App() {
//   return <div className="test">All the REACT are belong to us!</div>;
// }

const root = createRoot(document.getElementById('main'));
root.render(<App />);
