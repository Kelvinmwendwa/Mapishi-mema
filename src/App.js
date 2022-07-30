
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
import DisplayMeal from './components/meals/DisplayMeal/DisplayMeal';

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
          <Route path="/mealDetail/:idMeal" element={<DisplayMeal />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </FoodContext.Provider>
  );
}


export default App;
