import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import './style.scss';

import $ from 'jquery';

// function App() {
//   return <div className="test">All the REACT are belong to us!</div>;
// }

const main = document.getElementById('main')!;
createRoot(main).render(<App />);

// const body = $('#body');
const body = document.getElementById('body')!;
// const tracker = $('#tracker');
const tracker = document.getElementById('tracker');

body.onpointermove = (event) => {
  const { pageX, pageY } = event;
  tracker?.animate({
    top: `${pageY - 200}px`,
    left: `${pageX - 200}px`,
  }, {
    duration: 3000,
    fill: 'forwards',
  });
}
