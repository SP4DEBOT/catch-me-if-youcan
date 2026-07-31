const button = document.getElementById("catch-btn")
const header = document.getElementById("header")


let escapes = 0
let attempts = 0
let seconds =0 
let minutes =0

button.addEventListener("mouseenter", () => {
    //button movement will be delayed when escapes increasing
    let escapeChance = 1;
    let delay = 20;

    if (escapes > 20) {
        escapeChance = 0.95;
        delay = 50;
    }

    if (escapes > 40) {
        escapeChance = 0.90;
        delay = 80;
    }

    if (escapes > 60) {
        escapeChance = 0.80;
        delay = 120;
    }

    if (escapes > 80) {
        escapeChance = 0.70;
        delay = 180;
    }

    if (escapes > 100) {
        escapeChance = 0.60;
        delay = 250;
    }

    if (Math.random() < escapeChance) {

        setTimeout(() => {
            moveButton();
        }, delay);

    }

});

function moveButton() {
    const headerHeight = header.offsetHeight
    const buttonWidth = button.offsetWidth
    const buttonHeight = button.offsetHeight
    //keeps the button inside screen
    const maxx = window.innerWidth-buttonWidth
    const maxy = window.innerHeight-buttonHeight
    //creates random positions
    const random = Math.random() * maxx
    //prevent overlapping
    const randomy = headerHeight+Math.random() * (maxy - headerHeight)
    //random angle(optional)
    //const angle = Math.floor(Math.random()*61)-30

    //Random Size
    const width = Math.floor(Math.random()*80)+140


    button.style.left = random + "px"
    button.style.top = randomy + "px"
    button.style.transform = "none"
    button.style.backgroundColor = randomItem(colors)
    //button.style.rotate = angle + "deg"
    button.style.width = width + "px"
    button.textContent = randomItem(buttonTexts)
     document.getElementById("roast").textContent = randomItem(roasts)

    escapes++

    document.getElementById("escapes").textContent = escapes
   

}


//helper function (picks random element from array)

function randomItem(array) {
    return array[Math.floor(Math.random()* array.length)]
}

//function to update attempts,minutes,seconds
function updateTimer(){
    seconds++
    if(seconds == 60){
        minutes++
        seconds=0
    }

    const displayMinutes = String(minutes).padStart(2,"0")
}