
import "./Component.css"
import Header from './Components/Header';
import Landing from './Components/Landing';
import Charts from './Components/Charts';


const App = () => {
 

  return (
    <div className="Home">
      <div>
      <Header/>
      </div>
      <div>
    <Landing/>
      </div>
      <div>
        <Charts/>
      </div>
    </div>
  );
};

export default App;
