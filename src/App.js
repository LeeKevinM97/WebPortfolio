import { HashRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx'
import Projects from './components/Projects.jsx';
import ContactForm from './components/ContactForm.jsx';

import './index.css';
import './css/Main.css';

function App() {

  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="/projects/:cardId" element={<Projects/>}/>
        <Route path="contact" element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
