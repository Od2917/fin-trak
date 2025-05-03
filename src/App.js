import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import PackageList from './components/PackageList';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  return (
    <div className="App">
      <Navbar />
      {!selectedPackage ? (
        <><div classname="heading">
          <h1> Fin Trak<p> empowers clients to make informed decisions that align with their goals.</p></h1>
        </div>
          {/* Add a banner image above About Us */}
          <div className="banner">
            <img src="https://thumbs.dreamstime.com/b/coins-financial-growth-chart-blue-background-finance-investment-concepts-coins-financial-growth-chart-blue-344575282.jpg" alt="Explore Fin-Trek!" />
          
          </div>
          <section id="home">
            <PackageList onSelect={setSelectedPackage} />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>

          <Footer />
        </>
      ) : (
        <BookingForm selectedPackage={selectedPackage} />
      )}
    </div>
  );
}

export default App;