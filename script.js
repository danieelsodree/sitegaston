let paragSubHeader = document.querySelector(".parag-subheader");

setInterval(() => {
    paragSubHeader.innerHTML = "compre com cartão gaston e pague em até 10x sem juros";
}, "3000");

setInterval(() => {
    paragSubHeader.innerText = "frete grátis para compras acima de R$159,99*válido para regiões sul e sudeste";
}, "6000");

let imgArray = [
    {
        id: 0,
        imagem: "./assets/carrossel1.jpg",
    },
    {
        id: 1,
        imagem: "./assets/carrossel2.jpg",
    },
    {
        id: 2,
        imagem: "./assets/carrossel3.jpg",
    },
    {
        id: 3,
        imagem: "./assets/carrossel4.jpg",
    },
    {
        id: 4,
        imagem: "./assets/carrossel5.jpg",
    },
    {
        id: 5,
        imagem: "./assets/carrossel6.jpg",
    }
]

let currentItem = 0;
let imgHtml = document.querySelector("#img")
let btn = document.querySelectorAll("#btn");

window.addEventListener("DOMContentLoaded", function () {
    showImgHtml;
})

function showImgHtml() {
    const item = imgArray[currentItem];
    imgHtml.src = item.imagem;
}

btn[0].addEventListener("click", function () {
    currentItem++;
    if (currentItem > imgArray.length - 1) {
        currentItem = 0;
    }
    showImgHtml();
});

btn[1].addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = imgArray.length - 1;
    }
    showImgHtml();
});