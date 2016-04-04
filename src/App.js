import React, { Component } from 'react';

import FoodItem from './FoodItem';
import FoodList from './FoodList';
import MealItem from './MealItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentView: 'FoodItem'
    }
  }
  render() {
    const views = {
      FoodList: <FoodList />,
      FoodItem: <FoodItem id={2} />,
      MealItem: <MealItem  />
    }

    return (
      <div>
        <h1>Hello, world.</h1>
        <p>Welcome to my world.</p>
        {views[this.state.currentView]}
      </div>
    );
  }
}

export default App