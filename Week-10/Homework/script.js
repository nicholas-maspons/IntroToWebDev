// will i ever look back at and read these comments? idk but I did put much thought into them. so read them Nicholas...
document.addEventListener('DOMContentLoaded', () => {

    const myBtn = document.getElementById('gramsInputBtn')
    myBtn.addEventListener('click', displayValues)
    // i dont have () above bc im not calling it immediately. its on standby.
    // still... it feels weird

})


function foodNutrition() {
    // this function would be called fetch ___ or something
    // Idk about APIs but I think I would use one to access info on all sorts of foods.
    // As of now I am only using my precious avocado.

    // Note: per 100g
    // let vitC = 10  //mg
    // let vitE = 2.07  //mg
    // let vitK = 21  //mcg
    // let potassium = 485  //mg

    // the units really dont matter I think since these shouldnt ever have to change.
    // idk how to access the data when using {} yet. only in python
    let avocadoNutrition = [
        ['Vitamin C', [10, 'mg']],
        ['Vitamin E', [2.07, 'mg']],
        ['Vitamin K', [21, 'mcg']],
        ['Potassium', [485, 'mg']]
        ]

    return avocadoNutrition
}


function targetValues() {
    // When I make something but more... detailed I guess.
    // These values will be set by the user.
    // But for now they are just the typical recommended values.
    // There's a lot. So I'm not listing them all

    // not const bc the user will be able to change these vals
    // this should be all the info I need. Not too messy

    // in terms of time complexity when looping through this in the function below, it is worst case O(n)
    // with n being the total number of nutrients that exist to be tracked. FIND OUT HOW MANY NUTRIENTS THERE ARE
    let nutritionTargetVals = [
        ['Vitamin C', [90, 'mg']],
        ['Vitamin E', [15, 'mg']],
        ['Vitamin K', [120, 'mcg']],
        ['Potassium', [4700, 'mg']]
        ]

    return nutritionTargetVals
}

// pass in the data above. should only use a reference.
// foodVals from foodNutrition | targetVals from targetValues
function displayValues() {
    // maybe find a way where i can pass the funciton names (w/out ()) as params

    // rn i have it so that the all the nutrients and values I chose are presented in a fixed order (seen above)
    // but ideally i will have it controlled by the user or allow for alphabetical sorting at least
    // but they would also be able to choose to display certain units if they don't care about some

    const userGrams = document.getElementById('grams')
    let nutritionVals = foodNutrition()
    let targetVals = targetValues()
    // val is not an attribute as i didnt type it. its a property of the DOM element and its created automaticallt for form elems like <input>
    // attributes are intitilized to become properties when the DOM loads. whether i explcuitly typed it or not
    // The `value` attribute exists in the HTML (since it can be specified beforehand), but when not specified, its default value is initialized as "" as a property when the DOM loads.
    // The same applies to all other unspecified attributes, which are initialized with their default property values.
    // on the other hand name was an attribute and became a property
    // in inspect, it says add attribute tho. but this may be bc im interacting with a static version of the html
    // access value property using dot notation

    // if i didint do (), i would get everything, like my comments 
    // console.log(targetValues())

    // not sure about whats going with these comments. dont stress about it (yet)
    // i can see the default value in properties on the right after clicking input line. i wont see it change when i click the button. LOOK INTO THIS LATER ( i wont)
    // there is no value attribute visible in the html file. By default it is "" when the dom loads. Then its given a val by user. but recall the above comment. dont look into too much rn.
    
    //onsole.log(userGrams.value)
    // other examples
    // console.log(userGrams.required)
    // console.log(userGrams.name)

    console.log(`${userGrams.value}g Avocado Nutritional Value:`)
    for (let i = 0; i < targetVals.length; i++) {
        // hard coding? nah
        let nutrientName = nutritionVals[i][0]
        // 100 bc thats the nutritional value serving size i work with
        let nutrientAmount = (userGrams.value / 100) * nutritionVals[i][1][0]
        let nutrientUnit = nutritionVals[i][1][1]
        let percentDV = (nutrientAmount / targetVals[i][1][0]) * 100
        console.log(`${nutrientName}: ${nutrientAmount} ${nutrientUnit} (${Math.round(percentDV)}%DV)`)
    }

    // returns the amount with the appropriate units and the percent of the target it makes up
    // nutrients are always measured in specific units (ex: mg for potassium, g for fiber), 
    // which is why these units are "hardcoded"
    // The units I use are standardized globally.

    // uses the returned data from the two functions above (not retyping allat)

}

