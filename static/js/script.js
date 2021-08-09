// Challenge 1: Are Age in Days

function ageInDays() {
    var birthYear = prompt("What year were you born?");
    var currentYear = new Date().getFullYear();
    var ageInDays = (currentYear - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageInDays + " days old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen")
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGames(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
    let rpsDatabase = {
        'rock': {
            'rock': 0.5,
            'paper': 0,
            'scissors': 1
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'rock': 0,
            'paper': 1,
            'scissors': 0.5
        },
    }

    let humanScore = rpsDatabase[humanChoice][botChoice];
    let botScore = rpsDatabase[botChoice][humanChoice]

    return [humanScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return {
            'message': 'You lost!',
            'color': 'red'
        };
    }
    else if (yourScore === 0.5) {
        return {
            'message': 'You tied!',
            'color': 'yellow'
        };
    }
    else {
        return {
            'message': 'You Won!',
            'color': 'green'
        };
    }
}

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
    let imgsDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // let's remove all current images from page
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src=${imgsDatabase[humanImgChoice]} hieght=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' />`;
    botDiv.innerHTML = `<img src=${imgsDatabase[botImgChoice]} hieght=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' />`;
    messageDiv.innerHTML = `<h1 style='color: ${finalMessage['color']}; font-size: 60px; padding: 30px;'>${finalMessage['message']}</h1>`

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}



function buttonColorChange(optionSelected) {
    if (optionSelected.value === 'red') {
        buttonsRed();
    }
    else if (optionSelected.value === 'green') {
        buttonsGreen();
    }
    else if (optionSelected.value === 'reset') {
        buttonColorReset();
    }
    else if (optionSelected.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {
        let randomNum = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNum]);
    }
}