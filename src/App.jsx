import React from 'react';
import './index.css'
import './App.css';
import {Header,Skills,About,Footer,Works} from './containers'
import {useEffect} from "react";

// animate on scroll 
import AOS from 'aos';
import 'aos/dist/aos.css';
// google analytics
import ReactGa from 'react-ga4'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(()=>{
    const TRACKING_ID = 'REMOVED'
    ReactGa.initialize(TRACKING_ID)
    // to report page view 
    ReactGa.send({hittype:'pageview', page: '/home'})
  }, [])

  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
