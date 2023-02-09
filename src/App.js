import{Routes, Route, Link} from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';

function App() {
  return (
    <> 
    <NavBar />
 
    <Link to='/'>Home</Link>
    <Link to='/news'>News</Link>
    <Link to='/contact'>Contact</Link>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </>
  );
}

export default App;
