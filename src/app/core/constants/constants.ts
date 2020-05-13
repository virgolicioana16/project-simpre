export const cocktailsApi = 'https://www.thecocktaildb.com/api/json/v1/1';
export const mealsApi ='https://www.themealdb.com/api/json/v1/1';

export const backendUrl = {
    cocktailService: {
        searchCocktailByName: `${cocktailsApi}/search.php?s=`,
        searchCocktailByIngredient: `${cocktailsApi}/filter.php?i=`,
        searchCocktailByFirstLetter: `${cocktailsApi}/search.php?f=`
    },
    mealsServie: {
        searchMealByName: `${mealsApi}/search.php?s=`,
        searchMealByIngredient: `${cocktailsApi}/filter.php?i=`,
        searchMealByFirstLetter: `${cocktailsApi}/search.php?f=`
    }
}