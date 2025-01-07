function createBox() {
    let div = document.createElement('div');
    div.style.height = "60px";
    div.style.width = "60px";
    div.classList.add("box");
    container.append(div);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    createBox();
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
        box.style.backgroundColor = 'black';
    }
    )
})


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    removeAllChildNodes(container);

    const numOfBoxes = prompt("Enter number of boxes");
    const columns = Math.floor(Math.sqrt(numOfBoxes));

    const width = 960 / columns;
    const height = width;

    for (i = 0; i < numOfBoxes; i++) {
        let div = document.createElement('div');
        div.style.height = height + "px";
        div.style.width = width + "px";
        div.classList.add("box");
        container.append(div);
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (event) => {
            box.style.backgroundColor = getRandomRGB();
        }
        )
    })
})


