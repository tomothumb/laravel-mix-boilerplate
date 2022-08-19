import React from 'react';
import ReactDOM from 'react-dom';

export const Content:React.FC = () => {
  return (
    <p>aaa</p>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  document.getElementById('app')
);
