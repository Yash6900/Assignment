

import "./Component.css"
import Header from './Components/Header';
import Landing from './Components/Landing';
import Charts from './Components/Charts'
import Facts from "./Charts/Facts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
 

  return (
    <div>
      <Router>
        <Routes>
    <Route path='/' element= {<Landing />}/>
      <Route path="/chart" element= {<Charts />}/>
      </Routes>
      </Router>
    </div>
  );
};

export default App;
