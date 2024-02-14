const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-bth");
const noBth = document.querySelector(".no-bth");

yesBtn.addEventListener("click", () => {
    question.innerHTML="awww ur Gay ";
});

noBth.addEventListener("click", () => {
    question.innerHTML="ok ur Gay asf ";
    const noBtnRect = noBth.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBth.style.left = Math.floor((Math.random() * 250) + 1) + "px";
    noBth.style.top = Math.floor((Math.random() * 200) + 1) + "px";
});

// console.log("hello world")
