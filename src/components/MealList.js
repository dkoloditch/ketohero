import React from 'react';

const MealList = (props) => {
  const meals = props.meals.map(mealID => (
    <div key={mealID}>
      {"MealID: " + mealID}
    </div>
  ))

  return (
    <div>
      {meals}
    </div>
  )
}

export default MealList;