let itens = [
    {
        image: "animewoman.jpg",
        name:  "Anime girl",
        price: 59.50.toFixed(2),
        type:  "figure"
    },
    {
        image: "dragonballpersonagem.jpg",
        name: "Goku Super Saiyan",
        price: 79.99,
        type: "figure"
    },
    {
        image: "starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: 46.65,
        type: "figure"
    },
    {
        image: "gamepad.jpg",
        name: "Console gamepad",
        price: 33.90.toFixed(2),
        type: "painting"
    },
    {
        image: "clock.jpg",
        name: "Modern clock",
        price: 25.89,
        type: "painting"
    },
    {
        image: "personagem.jpg",
        name: "C3-PO",
        price: 28.00.toFixed(2),
        type: "painting"
    },
    {
        image: "animewoman.jpg",
        name:  "Anime girl",
        price: 59.50.toFixed(2),
        type:  "figure"
    },
    {
        image: "dragonballpersonagem.jpg",
        name: "Goku Super Saiyan",
        price: 79.99,
        type: "figure"
    },
    {
        image: "starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: 46.65,
        type: "figure"
    },
    {
        image: "gamepad.jpg",
        name: "Console gamepad",
        price: 33.90.toFixed(2),
        type: "painting"
    },
    {
        image: "clock.jpg",
        name: "Modern clock",
        price: 25.89,
        type: "painting"
    },
    {
        image: "personagem.jpg",
        name: "C3-PO",
        price: 28.00.toFixed(2),
        type: "painting"
    },
    {
        image: "animewoman.jpg",
        name:  "Anime girl",
        price: 59.50.toFixed(2),
        type:  "figure"
    },
    {
        image: "dragonballpersonagem.jpg",
        name: "Goku Super Saiyan",
        price: 79.99,
        type: "figure"
    },
    {
        image: "starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: 46.65,
        type: "figure"
    },
    {
        image: "gamepad.jpg",
        name: "Console gamepad",
        price: 33.90.toFixed(2),
        type: "painting"
    },
    {
        image: "clock.jpg",
        name: "Modern clock",
        price: 25.89,
        type: "painting"
    },
    {
        image: "personagem.jpg",
        name: "C3-PO",
        price: 28.00.toFixed(2),
        type: "painting"
    },
];

let listFigures = [];
let listFrames  = [];

function separaItens(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].type == "figure") {
            listFigures.push(arr[i]);
        }
        else if (arr[i].type == "painting") {
            listFrames.push(arr[i]);
        }

    }

}

separaItens(itens);

const body  = document.querySelector('body');
const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');

function inserirElementos(arr) {
    for (let i = 0; i < arr.length; i++) {

        let listItem = document.createElement('li');
        let img      = document.createElement('img');
        let heading3 = document.createElement('h3');
        let span     = document.createElement('span');
    
        if (arr == listFigures) {
            img.src = `./assets/img/actions/${arr[i].image}`;
            heading3.innerText = arr[i].name;
            span.innerText = `R$${arr[i].price}`;

            listItem.appendChild(img);
            listItem.appendChild(heading3);
            listItem.appendChild(span);
            list1.appendChild(listItem);

            listItem.classList.add(`itens`);
        }
        else if (arr == listFrames) {
            img.src = `./assets/img/painting/${arr[i].image}`;
            heading3.innerText = arr[i].name;
            span.innerText = `R$${arr[i].price}`;

            listItem.appendChild(img);
            listItem.appendChild(heading3);
            listItem.appendChild(span);
            list2.appendChild(listItem);

            listItem.classList.add(`itens`);
        }
    }
}

inserirElementos(listFigures);
inserirElementos(listFrames);

{/*
<ul>
    <li>
        <img></img>
        <h2></h2>
        <span></span>
    </li>
</ul>
*/}