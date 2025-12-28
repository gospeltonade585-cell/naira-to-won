function resetAll() {
    // This clears the input box
    document.getElementById('nairaInput').value = "";
    
    // This puts the display back to zero
    document.getElementById('resultDisplay').innerText = "₩0.00";
}

// Save this in your script.js
function calculateWon() {
    // 1. Grab the value from the input box
    let naira = document.getElementById('nairaInput').value;

    // 2. The exchange rate (1 Naira ≈ 0.85 Won - check current rates!)
    let rate = 0.85;

    // 3. Do the math
    let won = naira * rate;

    // 4. Update the screen with the result
    // .toFixed(2) keeps it to 2 decimal places
    document.getElementById('resultDisplay').innerText = "Result: ₩" + won.toFixed(2);
    
    // 5. Logic Check: A little message for your goal
    if (won > 1000000) {
        alert("That's a lot of Won! You're getting closer to Seoul!");
    }
}