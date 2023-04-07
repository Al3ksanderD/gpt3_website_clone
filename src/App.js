import React from 'react'

import { Brand, Cta, Navbar} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Footer />
      </div>
    </div>
  )
}

export default App
