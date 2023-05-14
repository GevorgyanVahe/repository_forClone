import React from 'react';
import ReactDOM from 'react-dom/client';

function App () {
  return React.createElement('div', {}, "hello world");
}



ReactDOM.createRoot(App(),  document.getElementById('root'));