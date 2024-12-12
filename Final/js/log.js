document.addEventListener('DOMContentLoaded', () => {
    const logForm = document.getElementById('logForm')
    
    logForm.addEventListener('submit', function(e) {
        e.preventDefault()
        
        const date = document.getElementById('logDate').value
        
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

        let existingIntake = JSON.parse(localStorage.getItem('userIntake'))
        if (!existingIntake) {
            existingIntake = []
        }
        
        // add new daily intake which will show on table
        existingIntake.push({
            date: date,
            data: nutrients
        });
        
        // updates local storage, with the chnage being visible on table and graph
        localStorage.setItem('userIntake', JSON.stringify(existingIntake));
        
        window.location.href = 'stats.html'
    });
});