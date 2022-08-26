import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { store } from './store'

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice";

import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      
      <Provider store={store}>
          <App />
      </Provider>

       

    </React.StrictMode>
  );


  // <ApiProvider api={apiSlice}>
  //         <App />
  //       </ApiProvider>