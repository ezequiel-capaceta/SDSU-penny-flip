let headsCount = 0;
if(localStorage.getItem("headsCount") !== null) {
    headsCount = parseInt(localStorage.getItem("headsCount"));
}

let tailsCount = 0;
if(localStorage.getItem("tailsCount") !== null) {
    tailsCount = parseInt(localStorage.getItem("tailsCount"));
}

updateDom()

document.querySelector(".flip-btn").addEventListener("click", function(){
    let isHeads = Math.random() > 0.5

    if (isHeads) {
        document.querySelector("img").src = "./assets/images/Penny-heads.jpeg";
        document.querySelector("h2").textContent = "You Flipped Heads!";
        headsCount++;
    } else {
        document.querySelector("img").src = "./assets/images/Penny-tails.jpeg";
        document.querySelector("h2").textContent = "You Flipped Tails!";
        tailsCount++;
    }

    setValuesLocalStorage();
    updateDom();
})

document.querySelector(".reset-btn").addEventListener("click", function(){
    headsCount = 0;
    tailsCount = 0;
    document.querySelector("h2").textContent = "Let's Get Rolling!";
    document.querySelector("img").src = "./assets/images/Penny-heads.jpeg";
    
    setValuesLocalStorage();
    updateDom();
})

function updateDom(){
    
    document.querySelector("#heads-count").textContent = headsCount;
    document.querySelector("#tails-count").textContent = tailsCount;    
    let total = headsCount + tailsCount;
    let percentageHeads = 0;
    let percentageTails = 0;

    if(total > 0) {
        percentageHeads = Math.round(headsCount/total * 100)
        percentageTails = Math.round(tailsCount/total * 100)
    }

    document.querySelector("#heads-percentage").textContent = percentageHeads + "%";
    document.querySelector("#tails-percentage").textContent = percentageTails + "%";
}

function setValuesLocalStorage() {
    localStorage.setItem("headsCount", headsCount);
    localStorage.setItem("tailsCount", tailsCount);
}