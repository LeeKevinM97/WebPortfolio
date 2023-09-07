import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Projects from './components/Projects.jsx';

import './index.css';
import './css/Main.css';

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="projects" element={<Projects/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
