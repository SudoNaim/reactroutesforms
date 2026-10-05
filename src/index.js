import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <h1>Index principal</h1>

    <hr />

    <Router />

    <hr />

    <h2>Pie de pagina</h2>
  </React.StrictMode>,
);
