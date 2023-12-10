// App.js or App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; (change)
import Footer from './components/Footer/Footer'; (chnage)
import AboutMe from './pages/AboutMe/AboutMe'; // Import the AboutMe component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          {/* Add routes for other sections */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
