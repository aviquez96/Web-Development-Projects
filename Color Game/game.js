var easy = 3;
var hard = 6;
var hardFlag = true;

var colors = generateRandomColors(hard);

// acquiring elements from html
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var message = document.querySelector("#message");
var greatRGB = document.querySelector("#greatRGB");
var colorRandomizer = document.querySelector("#colorRandomizer");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    hardFlag = false;
    colors = generateRandomColors(easy);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    greatRGB.style.background = "rgb(82, 133, 178)";

    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    hardFlag = true;
    colors = generateRandomColors(hard);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    greatRGB.style.background = "rgb(82, 133, 178)";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

colorRandomizer.addEventListener("click", function() {
    message.textContent = "";
    if (hardFlag) {
        // generate new colors
        colors = generateRandomColors(hard);
        // generate new picked color
        pickedColor = pickColor();
        // display the rgb line & colors
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
        greatRGB.style.background = "rgb(82, 133, 178)";
        colorRandomizer.textContent = "New Colors";
    } else {
        // generate new colors
        colors = generateRandomColors(easy);
        // generate new picked color
        pickedColor = pickColor();
        // display the rgb line & colors
        colorDisplay.textContent = pickedColor;

        for (var i = 0; i < squares.length; i++) {
            if(colors[i]){
                squares[i].style.background = colors[i];
            }
            else {
                squares[i].style.display = "none"; 
            }
        }
        greatRGB.style.background = "rgb(82, 133, 178)";
        colorRandomizer.textContent = "New Colors";
    }
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    // 
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "Correct";
            greatRGB.style.background = pickedColor;
            colorRandomizer.textContent = "Play Again?";
            correctColor();
        } else {
            this.style.background = "#232323";
            message.textContent = "Try Again"
        }
    });
}

function correctColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(colorNumber) {
    var colorsArray = [];
    for (var i = 0; i < colorNumber; i++) {
        colorsArray.push(randomColor());
    }
    return colorsArray;
}

function randomColor() {
    var rRandom = Math.floor((Math.random() * 256)+1);
    var gRandom = Math.floor((Math.random() * 256)+1);
    var bRandom = Math.floor((Math.random() * 256)+1);
    return "rgb(" + rRandom + ", " + gRandom + ", " + bRandom + ")";
}


