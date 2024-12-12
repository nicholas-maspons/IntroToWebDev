document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm')
    
    recipeForm.addEventListener('submit', function(e) {
        e.preventDefault()
        
        const recipeName = document.getElementById('recipeName').value
        const servingSize = document.getElementById('servingSize').value
 
        const nutrients = [
            {"Vitamin A": [Number(document.getElementById('vitaminA').value), "mcg"]},
            {"Vitamin B3": [Number(document.getElementById('vitaminB3').value), "mg"]},
            {"Vitamin C": [Number(document.getElementById('vitaminC').value), "mg"]},
            {"Vitamin D": [Number(document.getElementById('vitaminD').value), "mcg"]},
            {"Vitamin E": [Number(document.getElementById('vitaminE').value), "mg"]},
            {"Vitamin K": [Number(document.getElementById('vitaminK').value), "mcg"]},
            {"Potassium": [Number(document.getElementById('potassium').value), "mg"]},
            {"Calcium": [Number(document.getElementById('calcium').value), "mg"]},
            {"Iron": [Number(document.getElementById('iron').value), "mg"]},
            {"Sodium": [Number(document.getElementById('sodium').value), "mg"]},
            {"Water": [Number(document.getElementById('water').value), "ml"]}
        ];
 
        let existingRecipes = JSON.parse(localStorage.getItem('userRecipes'))
        if (!existingRecipes) {
            existingRecipes = {}
        }
        existingRecipes[recipeName] = {
            serving_size: [servingSize, "g"],
            nutrients: nutrients
        }

        // updates local storage, with the chnage being visible on table and graph
        localStorage.setItem('userRecipes', JSON.stringify(existingRecipes))
        
        // redirects user to main page
        window.location.href = 'stats.html'
    })
 })