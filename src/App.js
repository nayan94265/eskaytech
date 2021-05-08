import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Home from './Home'


function App() {
  return (
    <div className="App">

     <Router>
       <p>hiiiii</p>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
             <About /> 
          </Route>
          <Route path="Contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
