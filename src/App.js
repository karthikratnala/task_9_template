import React from 'react';
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import Cont from './components/contact';
import Serv from './components/services';
import Pric from './components/pricing';
import Test from './components/testmonials'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <Serv></Serv>
        <Pric></Pric>
        <Test></Test>
        <Cont></Cont>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
