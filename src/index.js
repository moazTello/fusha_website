import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18next from 'i18next';
import global_en from './translations/en/global.json';
import global_ar from './translations/ar/global.json';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


i18next.init({
  interpolation:{escapeValue:false},
  lng:"en",
  resources:{
    en:{
      global:global_en,
    },
    ar:{
      global:global_ar,
    },
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);

