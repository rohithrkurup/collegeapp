import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';

function App() {
  return (
    <div>
    <HomePage/>
    <Gallery/>
    <Contact/>
    <AboutUs/>
    </div>
  );
}

export default App;
