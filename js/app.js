// "use strict";

const authorBtn = document.querySelector('#author')
const whatLearnBtn = document.querySelector('#whatWeLearn')
const feedbacksBtn = document.querySelector('#feedbacks')
const modulsBtn = document.querySelector('#moduls')
const plansBtn = document.querySelector('#plans')

authorBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 2883,
        behavior: 'smooth'
    })
});

whatLearnBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 4420,
        behavior: 'smooth'
    })
});

feedbacksBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 5250,
        behavior: 'smooth'
    })
});

modulsBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 6525,
        behavior: 'smooth'
    })
});

plansBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 8900,
        behavior: 'smooth'
    })
});
