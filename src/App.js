import Navbar from './components/Navbar'; 
import MapContainer from './components/MapContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <MapContainer />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
