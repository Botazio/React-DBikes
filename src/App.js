import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import MapKey from './components/MapKey';
import { useState } from 'react';

function App() {
  const [mapKey, setMapKey] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MapKey mapKey={mapKey} setMapKey={setMapKey} />
            </Route>
            <Route exact path="/how_it_works">
              <HowItWorks />
            </Route>
            <Route exact path="/about">
              <About />
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
