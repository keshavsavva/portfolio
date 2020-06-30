import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Main from './pages/Main'


function App() {
    return (
        <HashRouter basename="/">
            <Header />
            <Main />
                {/* <Route exact path={["/home", "/"]} component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} /> */}
            {/* <Footer /> */}
        </HashRouter>
    );
  }
  
  export default App;
  