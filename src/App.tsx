import React, { useEffect } from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbars from './Components/Navbars';
import MyHome from './Components/MyHome';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';
import OurActivities from './Components/OurActivities';
import OurTrainings from './Components/OurTrainings';
import OurSchedule from './Components/OurSchedule';
import OurGallety from './Components/OurGallety';
import OurPrices from './Components/OurPrices';
import OurContacts from './Components/OurContacts';
import BackTop from './Components/BackTop';


function App() {
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="App">
      <Navbars />
      <MyHome />
      <AboutUs />
      <OurServices />
      <OurActivities/>
      <OurTrainings/>
      <OurSchedule/>
      <OurGallety/>
      <OurPrices/>
      <OurContacts/>
      <BackTop/>
    </div>
  );
}

export default App
