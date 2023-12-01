import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
// const path = require('path')

// const imageUpload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, 'images/');
//     },
//     filename(req, file, cb) {
//       const ext = path.extname(file.originalname);
//       cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//     limits: {fileSize: 5 * 1024 * 1024},
//   })
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
