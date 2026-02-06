import './App.css';
import { Layout } from './Components/Layout';
import { Projects } from './Components/Projects';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import { Contact } from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
