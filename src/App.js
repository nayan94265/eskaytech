import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Footer from './Footer';


function App() {
  return (
    <div className="App">

     <Router>
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
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
