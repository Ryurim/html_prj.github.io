// let hiddentxt = document.querySelector("#hiddentxt");
// let hiddenImg = document.querySelector(".hiddenImg");

// hiddenImg.addEventListener('mouseover', () => {
//     hiddentxt.innerText = "-";
//     hiddenImg.style.overflow = "unset";
// });

// hiddenImg.addEventListener('mouseout', () => {
//     hiddentxt.innerText = "+";
//     hiddenImg.style.overflow = "hidden";
// });


let hiddentxt = document.querySelectorAll("#hiddentxt");
let hiddenImg = document.querySelectorAll(".hiddenImg");

hiddenImg.forEach((hImg, i) => {
    hImg.addEventListener('mouseover', () => {
        hiddentxt[i].innerText = "-";
        hImg.style.overflow = "unset";
       
    });
});

hiddenImg.forEach((hImg, i) => {
    hImg.addEventListener('mouseout', () => {
        hiddentxt[i].innerText = "+";
        hImg.style.overflow = "hidden";
    });
});