import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         favoriteCity: 'Select City'
      }
   }

   onSelectCity = (favoriteCity) => this.setState({ favoriteCity })


   render() {
      const { favoriteCity } = this.state
      return (
         <div>
            <h1>React Custom Dropdown</h1>
            <Dropdown
               favoriteCity={favoriteCity}
               onSelectCity={this.onSelectCity}
            />
            {favoriteCity !== 'Select City' && <h4>My favorite city is {this.state.favoriteCity}.</h4>}
         </div>
      );
   }
}

export default App;
