import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Herosection from './Heresection';
import Courses from './Courses';
import About from './About';
import Plans from './plans';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Herosection/>
    <Courses/>
    <About/>
    <Plans/>
    <Footer/>
  </React.StrictMode>
);

