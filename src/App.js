import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Marketplace from './components/Marketplace/Marketplace';
import Games from './components/Games/Games'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">

      <div className="navigation">
        <Navigation />
      </div>

      <div className="home">
        <Home />
      </div>

      <div className="Games">
        <Games />
      </div>

      <div className="marketplace">
        <Marketplace />
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
