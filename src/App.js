import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import pacmanGame from './components/Games/List/Pacman/pacmanGame';
import PacmanAbout from './components/Games/List/Pacman/pacmanAbout';


function App() {

  const [mobileDevice, setMobileDevice] = useState(false)

  const checkDevice = () => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
      setMobileDevice(true)
      console.log("You are using a Mobile Device");
    } else {
      console.log("You are using Desktop");
    }
  }

  useEffect(() => {
    checkDevice()
    return () => {
    }
  }, [])

  return (
    <div>
      {
        !mobileDevice &&
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/games/about/pacman' component={PacmanAbout} />
              <Route exact path='/games/play/pacman' component={pacmanGame} />
              <Route render={() => <h1>404 page not found</h1>} />
            </Switch>
          </div>
        </Router>
      }
      {
        mobileDevice &&
        <div className="bgimg">
          <div className="middle">
            <h1>Use Desktop to view the dApp</h1>
          </div>
        </div >
      }


    </div >
  );
}

export default App;
