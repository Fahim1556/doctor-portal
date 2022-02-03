import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Faq from './components/Faq';
import Blog from './components/Blog'
import Footer from './components/Footer';



 function App() {
  return (
    <div>
            <Navbar/>    
             <Header/>
             <About/>
             <Service/>
              <Faq/>
             <Blog/>
             <Footer/>
    
    </div>
  );
}

export default App;
