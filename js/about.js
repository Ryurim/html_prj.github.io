let next = document.querySelector("#next");

let cnt = 0;
next.addEventListener('click', () => {
    let imgList = ['me0.jpg', 'me1.jpg', 'me2.jpg', 'me3.jpg'];
    let imgSrc = document.getElementById("imgSrc");
    cnt++;
    if (cnt > 3) cnt = 0;
    let imgUrl = "./img/about/" + imgList[cnt];
    imgSrc.setAttribute("src", imgUrl);
});

let hiddenImgs = document.querySelector("#hiddenImgs");

next.addEventListener('mouseover', () => {
    hiddenImgs.style.display = "block";
    next.style.cursor = "pointer";
});

next.addEventListener('mouseout', () => {
    hiddenImgs.style.display = "none";
});

let header = document.querySelector(".header");


function backGroundImage() {
    let imgList = ['back0.jpg', 'back1.jpg', 'back2.jpg', 'back3.jpg', 'back4.jpg'];
    let num = Math.floor(Math.random()*imgList.length);
    header.style.backgroundImage = `url(./img/backgroundImg/aboutImg/${imgList[num]})`;
}

