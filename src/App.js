import React from 'react';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import CardGrid from './components/CardGrid';


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <CardGrid />
      <Footer />
    </div>
    
  );
}
export default App;
