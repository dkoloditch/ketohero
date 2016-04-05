import React from 'react';

import ViewChanger from './ViewChanger';

import FoodItem from './FoodItem';
import FoodList from './FoodList';
import MealItem from './MealItem';
import styles from './styles';

const View = ({ view }) => {

  const views = {
    FoodList: <FoodList />,
    FoodItem: <FoodItem id={2} />,
    MealItem: <MealItem id={2} quantity={200} />
  }

  return (
    <div style={styles.app}>
      <h1>KetoHero</h1>
      <h3>Stuff</h3>
      <ViewChanger />
      {views[view]}
    </div>
  );
}

export default View;