import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Education from './pages/Education';
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';



function App() {

 
  return (
    <div className="App" style={{backgroundColor: "#fff"}}>
      
      <BrowserRouter>
        <NavbarComponent />
        <main className='cover d-flex justify-content-center align-items-center p-5'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work/>} />
            <Route path="/education" element={<Education/>} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
    
   
    </div>
  );  
}

export default App;
