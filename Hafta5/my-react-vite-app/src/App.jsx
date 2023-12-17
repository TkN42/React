import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetailPage from './pages/PostDetailPage';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
