import React from 'react';

import data from './mockData';

export default class FoodItem extends React.Component {

  static defaultProps = {
    id: null,
    name: 'Food',
    protein: 0.4,
    fat: 0.3,
    carbs: 0.3,
    quantity: 100
  }


  render() {
    let food;
    if(this.props.id === null) {
      food = this.props;
    } else {
      food = data[this.props.id]
    }
    return (
      <div>
        <span>ID: {food.id} | </span>
        <span>{food.protein}% | {food.fat}% | {food.carbs}% | </span>
        <span>{food.name}</span>
        <span>{food.children} | </span>
        <span>{food.protein * this.props.quantity}g | {food.fat * this.props.quantity}g | {food.carbs * this.props.quantity}</span>
      </div>
    )
  }
}