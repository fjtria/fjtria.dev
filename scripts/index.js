// https://www.youtube.com/watch?v=W5oawMJaXbU

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval1 = null;
let interval2 = null;
let interval3 = null;
let interval4 = null;
let interval5 = null;


document.querySelector(".nav-about").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval1);
    interval1 = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval1);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-skills").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval2);
    interval2 = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval2);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-experience").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval3);
    interval3 = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval3);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-projects").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval4);
    interval4 = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval4);
        }
        iteration += 1 / 3;
    }, 30);
}

document.querySelector(".nav-contact").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval5);
    interval5 = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval5);
        }
        iteration += 1 / 3;
    }, 30);
}