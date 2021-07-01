import React, { Component } from "react";

import chuck from "../img/Chuck Norris.jpg";
import random from '../img/Random photo.png';
import Joke from './Joke';
import Categories from './Categories';
import '../style/App.css'



class App extends Component {
  state = {
    joke:'',
    category: 'select',
    impersonate: [],
  };


  handleChangeImpersonate = (e)=>{
        const impersonate = e.target.value.split(' ');
        this.setState({
            impersonate
        })
        
        
  }

  handleClickCategories = (e)=>{
        const category = e.target.id ;
        this.setState({
        category
        })
  }

  handleClickCategoriesActive = ()=>{
        document.querySelector('.categories__option').classList.toggle('categories__option--active');
  }

  handleDataFetch = () => {
        fetch(`http://api.icndb.com/jokes/random?${this.state.impersonate[0] ? `firstName=${this.state.impersonate[0]}&lastName=${this.state.impersonate[1] ? this.state.impersonate[1] : ''}&` : ''}${this.state.category ==='select' ? '' : `limitTo=[${this.state.category}]`}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                joke: data.value.joke
            })
        })
  }

  componentDidMount(){
        fetch(`http://api.icndb.com/jokes/random`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                joke: data.value.joke
            })
        })
  }

  render() {
    return (
      <main>
        <div className="app">
          <img className='app__img' src={this.state.impersonate[0] ? random : chuck} alt="Chuck Norris" />
          <Joke joke={this.state.joke} />
          <Categories category={this.state.category} handleClickCategoriesActive={this.handleClickCategoriesActive} handleClickCategories={this.handleClickCategories}/>          
          <input className='app__impersonate' type="text" name="impersonate" placeholder="Impersonate Chuck Norris"  onChange={this.handleChangeImpersonate} />
          <input className='app__submit' type="submit" value={`Draw a ${this.state.impersonate[0] ? this.state.impersonate.join(' ') : 'Chuck Norris'} joke`} onClick={this.handleDataFetch} />
        </div>
      </main>
    );
  }
}

export default App;
