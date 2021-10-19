import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import pacmanGame from './components/Games/List/Pacman/pacmanGame';
import pacmanAbout from './components/Games/List/Pacman/pacmanAbout';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/games/about/pacman' component={pacmanAbout} />
          <Route exact path='/games/play/pacman' component={pacmanGame} />
          
          
          <Route render={() => <h1>404 page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
