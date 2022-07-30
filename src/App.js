
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';

import About from './components/About/About';
import Connect from './components/Connect/Connect';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';

export const FoodContext = createContext();

function App() {
  const [foodInfo, setFoodInfo] = useState([])

 
  // import { faCopy, faQuestionCircle, faQrcode, faGithub } from '@fortawesome/free-solid-svg-icons';
 

  return (
    <FoodContext.Provider value={[foodInfo, setFoodInfo]}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Connect />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </FoodContext.Provider>
  );
}


export default App;
