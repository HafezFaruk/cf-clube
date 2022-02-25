import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Blogs from './Components/Blogs/Blogs';
import Navbar from './Components/Navbar/Navbar';
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Blogs/>
      <Registration/>
    </div>
  );
}

export default App;
