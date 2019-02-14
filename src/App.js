import React, { Component } from 'react';
import './App.css';
import BooksList from './components/BooksList/BooksList';
import Searchbar from './components/Searchbar/Searchbar';
import Google from './util/Google';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
    this.searchGoogle = this.searchGoogle.bind(this);
  }

   searchGoogle(q, orderBy){
     Google.search(q, orderBy).then(items => {
      this.setState ({
      items: items
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h2 className="navbar">UnPutDownAble</h2>

        <Searchbar searchGoogle={this.searchGoogle}/>
        <BooksList books={this.state.items}/>
      </div>
    );
  }
}

export default App;
