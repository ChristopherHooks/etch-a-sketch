const container = document.querySelector('#container');

function createBox() {
    let div = document.createElement('div');
    div.classList.add("box");
    // div.textContent = 'div';
    container.append(div);
}

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
    container.innerHTML = "";
})