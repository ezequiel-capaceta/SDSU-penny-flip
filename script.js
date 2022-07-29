// alert("I'm loaded!")
let headsCount = 0;
let tailsCount = 0;

// when flip the penny button is clicked

document.querySelector(".flip-btn").addEventListener("click", function(){
    alert("I was clicked!")

    isHeads = Math.random() >= 0.5

    if(isHeads){
        document.querySelector("img").src = "/assets/images/Pennies.webp"
        document.querySelector("h2),textContenmt = ("You Flipped Heads!")
        headsCount++
    }else{
        document.querySelector("img").src = "/assets/images/Pennies.webp"
        document.querySelector("h2),textContenmt = ("You Flipped Tails!")
        tailsCount++

    }

    let total = headsCount + tailsCount;
    percengtageHeads = Math.round(headsCount/total * 100)
    percentageTails = Math.round(tailsCount/total * 100)

    // update the image to display results of heads and/or tails

// update h2 with result of You Flipped Heads/Tails!

// update the table cells with results
    // 1. number of heads and/or tails
    // 2. percentage of heads and/or tails

// increment variable counter for heads/tails


})

