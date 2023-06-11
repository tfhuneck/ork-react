import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Mobile from './components/MobileNav';
import Home from './components/Home';
import About from './components/About';
import Catering from './components/Catering';
import Contact from './components/Contact';
import Menus from './components/Menus';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Mobile/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='/menus' index element={<Menus/>} />
        <Route path='/catering' index element={<Catering/>} />
        <Route path='/contact' index element={<Contact/>} />
        <Route path='/about' index element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
