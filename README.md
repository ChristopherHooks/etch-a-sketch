# Etch-a-Sketch
This project creates a **dynamic grid-based hover effect** using JavaScript, HTML, and CSS. Users can hover over grid boxes to change their background color and opacity incrementally, or reset the grid to a new configuration.

## Features

- **Dynamic grid creation**: Generates a grid of boxes that users can customize by specifying the number of boxes.
- **Interactive hover effect**: Hovering over a box changes its background color to random RGB values and increases its opacity until fully visible.
- **Reset grid**: Allows users to clear the current grid and specify a new size (up to 10,000 boxes).
- **Responsive design**: Grid adjusts dynamically to fit within a fixed container width of 960px.

---

## How It Works

### Key Functions

1. **`createBox`**:  
   Creates a single box with default styling (60px by 60px and 0 opacity).  
   Appends the box to the container.

2. **`removeAllChildNodes`**:  
   Removes all child elements (boxes) from the grid container.

3. **`getRandomRGB`**:  
   Generates a random RGB color string to use as the background color of hovered boxes.

---

### Main Logic

1. **Initial Grid Creation**:  
   - The script generates a default grid with 256 boxes (16x16).
   - Boxes are added to the container and styled.

2. **Hover Effect**:  
   - Each box listens for the `mouseover` event.
   - On hover, the box's background color is set to a random RGB color, and its opacity increases by 0.1 until it reaches 1.

3. **Grid Reset**:  
   - Clicking the reset button clears the current grid and prompts the user to input a new number of boxes.  
   - The script calculates the new grid dimensions based on the input and the fixed container width (960px).  
   - A new grid is created with updated box sizes.

---

## Code Overview

### `createBox`

Creates and styles an individual grid box.

```javascript
function createBox() {
    let div = document.createElement('div');
    div.style.height = "60px";
    div.style.width = "60px";
    div.classList.add("box");
    div.style.opacity = 0;
    container.append(div);
}
```

---

### `removeAllChildNodes`

Clears the container of all child elements.

```javascript
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
```

---

### `getRandomRGB`

Generates a random RGB color string.

```javascript
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
```

---

### Reset Button Logic

Handles the grid reset and prompts the user for the new number of boxes.

```javascript
btn.addEventListener("click", () => {
    removeAllChildNodes(container);

    const numOfBoxes = prompt("Enter number of boxes");
    if (numOfBoxes > 10000) {
        alert("Boxes set to maximum 10,000");
        numOfBoxes = 10000;
    }

    const columns = Math.floor(Math.sqrt(numOfBoxes));
    const width = 960 / columns;
    const height = width;

    for (i = 0; i < numOfBoxes; i++) {
        let div = document.createElement('div');
        div.style.height = height + "px";
        div.style.width = width + "px";
        div.classList.add("box");
        div.style.opacity = 0;
        container.append(div);
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (event) => {
            box.style.backgroundColor = getRandomRGB();
            let opacity = parseFloat(box.style.opacity);
            opacity += .1;
            if (opacity > 1) {
                opacity = 1;
            }
            box.style.opacity = opacity;
        });
    });
});
```

---

## Example HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Grid with Hover Effect</title>
    <style>
        #container {
            display: grid;
            grid-template-columns: repeat(16, 1fr);
            grid-template-rows: repeat(16, 1fr);
            width: 960px;
            margin: 0 auto;
            border: 1px solid black;
        }
        .box {
            border: 1px solid #ddd;
            transition: background-color 0.2s ease, opacity 0.2s ease;
        }
        #btn {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Dynamic Grid Hover Effect</h1>
    <button id="btn">Reset Grid</button>
    <div id="container"></div>
    <script src="script.js"></script>
</body>
</html>
```

---

## How to Use

1. Clone or download the repository.
2. Open the HTML file in a web browser.
3. Hover over the grid to observe the random color and opacity effect.
4. Click the "Reset Grid" button to create a new grid:
   - Enter the desired number of boxes (maximum: 10,000).
   - A new grid will be generated, dynamically adjusting box sizes to fit the container.

---

## Future Enhancements

- Add a color picker to allow users to choose a base color for the grid.
- Include more complex hover effects, such as gradients or animations.
- Enable saving and loading grid configurations.
- Add mobile support with touch interactions.

Enjoy experimenting with this interactive grid! 🎨✨
