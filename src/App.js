import Latest from "./components/Latest";
import Home from "./components/Home";
import Kids from "./components/Kids";
import Gallery from './components/Gallery';
import { SliderData } from './components/SliderData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2021" element={<Latest />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/gallery" element={<Gallery slides={SliderData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;