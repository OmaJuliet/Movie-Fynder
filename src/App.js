import Year2021 from "./components/Year2021";
import Home from "./components/Home";
import Year2022 from "./components/Year2022";
import Gallery from './components/Gallery';
import { SliderData } from './components/SliderData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2021" element={<Year2021 />} />
          <Route path="/2022" element={<Year2022 />} />
          <Route path="/gallery" element={<Gallery slides={SliderData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;