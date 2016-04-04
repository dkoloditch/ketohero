
// Child depends on what view is currently active


<App>
	{children}
<App>

<MealList meals={meals}>
	meals.map(meal => (
		<div><link to='meallist/:mealid'><span>{meal.name}</span></link>
	))

<FullMeal mealid={mealid} canEdit={false}>
	<MealItem />
	<MealSummary />
</FullMeal>

<FullMeal canEdit={true}>
	<MealItem />
	<AddItem />
	<MealSummary />
</FullMeal>

<MealItem>
	<FoodItem />
	<Quantity />
</MealItem>

<FoodItem food={food}>
	<div>
		<p>{food.name}</p>
		<p>
			<span>{food.protein}</span>
			<span>{food.}</span>
			<span>{food.fat}</span>
		</p>