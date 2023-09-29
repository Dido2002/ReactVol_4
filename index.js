import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task01 from './Task01';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Task01/>
    </BrowserRouter>
  </>
);


