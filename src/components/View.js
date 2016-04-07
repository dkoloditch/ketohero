import React from 'react';

import ViewChanger from './ViewChanger';

import FoodItem from './FoodItem';
import FoodList from './FoodList';
import MealItem from './MealItem';
import MealList from './MealList';

import styles from './styles';

const View = ({ view, user }) => {

  const views = {
    FoodList: <FoodList />,
    FoodItem: <FoodItem id={2} />,
    MealItem: <MealItem id={2} quantity={200} />,
    MealList: <MealList meals={user.mealIds} />
  }

  return (
    <div style={styles.app}>
      <h1>KetoHero</h1>
      <h3>Stuff</h3>
      <h3>{"Username: " + user.username}</h3>
      <ViewChanger />
      {views[view]}
    </div>
  );
}

export default View;