const button = document.querySelectorAll(".drum");

// for clicks
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        const alphabet = btn.innerHTML; // identifies which button is clicked
        makeSound(alphabet);    // calling function makeSounds
        animation(alphabet);    // calling function animation
    });
});

// for keyboard clicks
document.addEventListener("keypress", (event) => {
    makeSound(event.key);   // calling function makeSounds
    animation(event.key);   // calling function animation
})

// function for making sound
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");    // inbuilt constructor
            audio.play();
        break;
        case "a":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        default:
            alert("Click appropriate button!");
    }
}

function animation(key){
    const activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed");

    // apply timeout so that button will come back to original state(unclicked)
    // Syntax => setTimeout(funciton, milliseconds, param1, param2,...)
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100)
}