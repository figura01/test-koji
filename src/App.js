
import HomePage from './Pages/Home';
import SingleArticle from './Pages/SingleArticle';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/article/:id" component={SingleArticle}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
