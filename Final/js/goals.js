document.addEventListener('DOMContentLoaded', () => {
    storeData()
    displayGraphs()

})


function displayGraphs() {
    // const is typically used but the value changes
    let userIntake = JSON.parse(localStorage.getItem("userIntake"));
    let userGoals = JSON.parse(localStorage.getItem("userGoals"))
    // use stringify and parse
    
    let nutrientNames = userIntake[0].data.map(entry => Object.keys(entry)[0])

    // loop through the first 11 nutrients (or less if there are fewer)
    for (let i = 0; i < Math.min(11, nutrientNames.length); i++) {
        let nutrient = nutrientNames[i]

        let targetGoal = userGoals.find(goal => Object.keys(goal)[0] === nutrient)
        let targetValue = targetGoal[nutrient][0]
        let unit = targetGoal[nutrient][1] // maybe ill use this idk

        let dates = []
        let nutrientValues = []

        // [0] bc of data format | [1] would be the unit
        for (let day of userIntake) {
            let nutrientEntry = day.data.find(entry => Object.keys(entry)[0] === nutrient)
            
            if (nutrientEntry) {
                dates.push(day.date)
                nutrientValues.push(nutrientEntry[nutrient][0])
            }
        }

        // ctx means context
        let ctx = document.getElementById(`chart-${i + 1}`).getContext('2d')
        //'chart-1'

        // I am creating a Chart object which takes 2 parameters
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: `${nutrient} Intake`,
                    data: nutrientValues,
                    borderColor: `rgb(0, ${(80 + (i * 40) % 255)}, 0)`, // + to avoid too dark green and % to repeat/cycle
                },
                {
                    label: `${nutrient} Target`,
                    data: Array(dates.length).fill(targetValue),
                    borderColor: 'red',
                    fill: false
                }
            ]
            },
            options: {
                responsive: true,  // i could remove this and be fine, but response and MAR are used together often
                maintainAspectRatio: false, // The defualt was 2:1. It was using my .graph-container width to calculate a height, ignoring my height in the process. But now it follows my class (outdated but still gonna keep)
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: `${nutrient} Intake`
                    }
                }
            }
        });
    }
}

function storeData() {
    let userData = {
        "nm121606": {
          "target": [
            {"Vitamin A": [900, "mcg"]},
            {"Vitamin B3": [16, "mg"]},
            {"Vitamin C": [90, "mg"]},
            {"Vitamin D": [15, "mcg"]},
            {"Vitamin E": [15, "mg"]},
            {"Vitamin K": [120, "mcg"]},
            {"Potassium": [3400, "mg"]},
            {"Calcium": [1000, "mg"]},
            {"Iron": [8, "mg"]},
            {"Sodium": [2300, "mg"]},
            {"Water": [3700, "ml"]}
          ],
          "intake": [
            {
              "date": "2024-11-29",
              "data": [
                {"Vitamin A": [643, "mcg"]},
                {"Vitamin B3": [12, "mg"]},
                {"Vitamin C": [81, "mg"]},
                {"Vitamin D": [14, "mcg"]},
                {"Vitamin E": [14, "mg"]},
                {"Vitamin K": [114, "mcg"]},
                {"Potassium": [3242, "mg"]},
                {"Calcium": [798, "mg"]},
                {"Iron": [7, "mg"]},
                {"Sodium": [1857, "mg"]},
                {"Water": [2672, "ml"]}
              ]
            },
            {
              "date": "2024-11-30",
              "data": [
                {"Vitamin A": [972, "mcg"]},
                {"Vitamin B3": [24, "mg"]},
                {"Vitamin C": [95, "mg"]},
                {"Vitamin D": [19, "mcg"]},
                {"Vitamin E": [23, "mg"]},
                {"Vitamin K": [166, "mcg"]},
                {"Potassium": [4724, "mg"]},
                {"Calcium": [1370, "mg"]},
                {"Iron": [12, "mg"]},
                {"Sodium": [3282, "mg"]},
                {"Water": [2398, "ml"]}
              ]
            },
            {
              "date": "2024-12-01",
              "data": [
                {"Vitamin A": [756, "mcg"]},
                {"Vitamin B3": [14, "mg"]},
                {"Vitamin C": [91, "mg"]},
                {"Vitamin D": [11, "mcg"]},
                {"Vitamin E": [16, "mg"]},
                {"Vitamin K": [96, "mcg"]},
                {"Potassium": [2994, "mg"]},
                {"Calcium": [749, "mg"]},
                {"Iron": [6, "mg"]},
                {"Sodium": [1540, "mg"]},
                {"Water": [2694, "ml"]}
              ]
            },
            {
              "date": "2024-12-02",
              "data": [
                {"Vitamin A": [1045, "mcg"]},
                {"Vitamin B3": [27, "mg"]},
                {"Vitamin C": [102, "mg"]},
                {"Vitamin D": [17, "mcg"]},
                {"Vitamin E": [20, "mg"]},
                {"Vitamin K": [174, "mcg"]},
                {"Potassium": [5100, "mg"]},
                {"Calcium": [1348, "mg"]},
                {"Iron": [13, "mg"]},
                {"Sodium": [3354, "mg"]},
                {"Water": [2885, "ml"]}
              ]
            },
            {
              "date": "2024-12-03",
              "data": [
                {"Vitamin A": [758, "mcg"]},
                {"Vitamin B3": [18, "mg"]},
                {"Vitamin C": [93, "mg"]},
                {"Vitamin D": [15, "mcg"]},
                {"Vitamin E": [16, "mg"]},
                {"Vitamin K": [112, "mcg"]},
                {"Potassium": [4137, "mg"]},
                {"Calcium": [1054, "mg"]},
                {"Iron": [8, "mg"]},
                {"Sodium": [2617, "mg"]},
                {"Water": [2801, "ml"]}
              ]
            },
            {
              "date": "2024-12-04",
              "data": [
                {"Vitamin A": [1184, "mcg"]},
                {"Vitamin B3": [22, "mg"]},
                {"Vitamin C": [99, "mg"]},
                {"Vitamin D": [13, "mcg"]},
                {"Vitamin E": [21, "mg"]},
                {"Vitamin K": [159, "mcg"]},
                {"Potassium": [4575, "mg"]},
                {"Calcium": [1233, "mg"]},
                {"Iron": [11, "mg"]},
                {"Sodium": [3146, "mg"]},
                {"Water": [2545, "ml"]}
              ]
            },
            {
              "date": "2024-12-05",
              "data": [
                {"Vitamin A": [872, "mcg"]},
                {"Vitamin B3": [13, "mg"]},
                {"Vitamin C": [72, "mg"]},
                {"Vitamin D": [16, "mcg"]},
                {"Vitamin E": [15, "mg"]},
                {"Vitamin K": [135, "mcg"]},
                {"Potassium": [3195, "mg"]},
                {"Calcium": [897, "mg"]},
                {"Iron": [7, "mg"]},
                {"Sodium": [2389, "mg"]},
                {"Water": [2661, "ml"]}
              ]
            }
          ],
          "recipes": {
            "Recipe 1": {
              "serving_size": [100, "g"],
              "nutrients": [
                {"Vitamin A": [200, "mcg"]},
                {"Vitamin B3": [2, "mg"]},
                {"Vitamin C": [5, "mg"]},
                {"Vitamin D": [0, "mcg"]},
                {"Vitamin E": [1, "mg"]},
                {"Vitamin K": [5, "mcg"]},
                {"Potassium": [500, "mg"]},
                {"Calcium": [30, "mg"]},
                {"Iron": [0.5, "mg"]},
                {"Sodium": [100, "mg"]},
                {"Water": [0, "ml"]}
              ]
            },
            "Recipe 2": {
              "serving_size": [200, "g"],
              "nutrients": [
                {"Vitamin A": [400, "mcg"]},
                {"Vitamin B3": [4, "mg"]},
                {"Vitamin C": [10, "mg"]},
                {"Vitamin D": [5, "mcg"]},
                {"Vitamin E": [2, "mg"]},
                {"Vitamin K": [10, "mcg"]},
                {"Potassium": [700, "mg"]},
                {"Calcium": [50, "mg"]},
                {"Iron": [2, "mg"]},
                {"Sodium": [300, "mg"]},
                {"Water": [0, "ml"]}
              ]
            }
          }
        }
      }
      
    // the users data
    localStorage.setItem("userGoals", JSON.stringify(userData.nm121606.target))
    localStorage.setItem("userIntake", JSON.stringify(userData.nm121606.intake))
    localStorage.setItem("userRecipes", JSON.stringify(userData.nm121606.recipes))    
}
