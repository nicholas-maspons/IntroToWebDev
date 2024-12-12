document.addEventListener('DOMContentLoaded', () => {
    // const myBtn = document.getElementById('gramsInputBtn')
    // myBtn.addEventListener('click', displayValues)
    // i dont have () above bc im not calling it immediately. its on standby.
    createTables()
    // updateGraphs (which might call displayGraphs inside?) or maybe i only need one func
    // let jsonObject = JSON.parse(localStorage.getItem("userIntake"))
    // console.log(jsonObject.keys)
    // 
})


function createTables() {
    // get data from localstorage
    let userGoals = JSON.parse(localStorage.getItem("userGoals"))
    let userIntake = JSON.parse(localStorage.getItem("userIntake"))
    let userRecipes = JSON.parse(localStorage.getItem("userRecipes"))

 

    // GOALS
    let goalsTable = document.createElement('table')
    let goalsHTML = '<thead><tr><th>Nutrient</th><th>Target Value</th><th>Unit</th></tr></thead><tbody>'
    
    for(let i = 0; i < userGoals.length; i++) {
        let nutrient = Object.keys(userGoals[i])[0]
        let value = userGoals[i][nutrient][0]
        let unit = userGoals[i][nutrient][1]
        goalsHTML += `<tr><td>${nutrient}</td><td>${value}</td><td>${unit}</td></tr>`
    }
    goalsHTML += '</tbody>'
    goalsTable.innerHTML = goalsHTML

    // INTAKE
    let intakeTable = document.createElement('table')
    let intakeHTML = '<thead><tr><th>Date</th>'
    
    for(let entry of userIntake[0].data) {
        intakeHTML += `<th>${Object.keys(entry)[0]}</th>`
    }
    intakeHTML += '</tr></thead><tbody>'

    for(let day of userIntake) {
        intakeHTML += `<tr><td>${day.date}</td>`
        for(let nutrient of day.data) {
            intakeHTML += `<td>${Object.values(nutrient)[0][0]}</td>`
        }
        intakeHTML += '</tr>'
    }
    intakeHTML += '</tbody>'
    intakeTable.innerHTML = intakeHTML

    // RECIPES
    let recipesTable = document.createElement('table')
    let recipesHTML = '<thead><tr><th>Recipe Name</th><th>Serving Size</th>'
    
    let firstRecipe = Object.values(userRecipes)[0]
    for(let nutrient of firstRecipe.nutrients) {
        recipesHTML += `<th>${Object.keys(nutrient)[0]}</th>`
    }
    recipesHTML += '</tr></thead><tbody>'

    for(let recipeName in userRecipes) {
        let recipe = userRecipes[recipeName]
        recipesHTML += `<tr><td>${recipeName}</td>`
        recipesHTML += `<td>${recipe.serving_size[0]} ${recipe.serving_size[1]}</td>`
        for(let nutrient of recipe.nutrients) {
            recipesHTML += `<td>${Object.values(nutrient)[0][0]}</td>`
        }
        recipesHTML += '</tr>'
    }
    recipesHTML += '</tbody>'
    recipesTable.innerHTML = recipesHTML

    // done
    let containers = [];
    // prob just gonna do 3 tables.
    let titles = ['Goals', 'Weekly Intake', 'Recipes']
    // function() | () => same thing. il just use whichever comes to mind thorughout this prject
    for (let i = 0; i < titles.length; i++) {
        let container = document.createElement('div')
        container.className = 'table-container'
        container.innerHTML = `<div class="table-title">${titles[i]}</div>`
        
        // goals will show first
        if (i === 0) {
            container.style.display = 'block'
        } else {
            container.style.display = 'none'
        }
        
        document.body.appendChild(container)
        containers.push(container)
    }
    
    containers[0].appendChild(goalsTable)
    containers[1].appendChild(intakeTable)
    containers[2].appendChild(recipesTable)


    document.getElementById('tableSelect').addEventListener('change', function() {
        for(let i = 0; i < containers.length; i++) {
            containers[i].style.display = 'none'
        }
        if(this.value === 'goals') {
            containers[0].style.display = 'block'
        } else if(this.value === 'intake') {
            containers[1].style.display = 'block'
        } else if(this.value === 'recipes') {
            containers[2].style.display = 'block'
        }
    })
}