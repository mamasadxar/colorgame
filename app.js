let scoreCount = 0;
let h1 = document.querySelector("h1");
let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");
let score = document.querySelector(".score");
score.innerText = `Score: ${scoreCount}`;
let guessColor = document.querySelector(".guessColor");
let reset = document.querySelector("#reset");
let swap = document.querySelector("#swap");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");
let difficultyState;
let randomRed;
let randomGreen;
let randomBlue;
let chosenColor;
let correctAnswer;

function easyBox1check() {
    if(correctAnswer == 1) {
        scoreCount += 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        easyDifficulty();
    } else if(correctAnswer == 0) {

    } else {
        scoreCount -= 5;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function easyBox2check() {
    if(correctAnswer == 2) {
        scoreCount += 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        easyDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 5;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function easyBox3check() {
    if(correctAnswer == 3) {
        scoreCount += 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        easyDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 5;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}



function mediumBox1check() {
    if(correctAnswer == 1) {
        scoreCount += 20;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        mediumDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function mediumBox2check() {
    if(correctAnswer == 2) {
        scoreCount += 20;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        mediumDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function mediumBox3check() {
    if(correctAnswer == 3) {
        scoreCount += 20;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        mediumDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function mediumBox4check() {
    if(correctAnswer == 4) {
        scoreCount += 20;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        mediumDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function mediumBox5check() {
    if(correctAnswer == 5) {
        scoreCount += 20;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        mediumDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function mediumBox6check() {
    if(correctAnswer == 6) {
        scoreCount += 20;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        mediumDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 10;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}



function hardBox1check() {
    if(correctAnswer == 1) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox2check() {
    if(correctAnswer == 2) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox3check() {
    if(correctAnswer == 3) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox4check() {
    if(correctAnswer == 4) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox5check() {
    if(correctAnswer == 5) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox6check() {
    if(correctAnswer == 6) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox7check() {
    if(correctAnswer == 7) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox8check() {
    if(correctAnswer == 8) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}
function hardBox9check() {
    if(correctAnswer == 9) {
        scoreCount += 30;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Correct!";
        h1.style.color = "black";
        hardDifficulty();
    } else if(correctAnswer == 0) {
        
    } else {
        scoreCount -= 15;
        console.log(scoreCount);
        score.innerText = `Score: ${scoreCount}`;
        h1.innerText = "Wrong!";
        h1.style.color = "black";
    }
}

function generateRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

function easyDifficulty() {
    diffSwap()
    score.innerText = `Score: ${scoreCount}`;
    difficultyState = 1;
    console.log(difficultyState);
    h1.style.color = "white";
    randomRed = Math.floor(Math.random()* 256);
    randomGreen = Math.floor(Math.random()* 256);
    randomBlue = Math.floor(Math.random()* 256);
    guessColor.innerText = `Guess Color: rgb(${randomRed},${randomGreen},${randomBlue})`;
    chosenColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    let manionknow = Math.floor(Math.random() * 3) + 1;
    box4.style.backgroundColor = "white";
    box5.style.backgroundColor = "white";
    box6.style.backgroundColor = "white";
    box7.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box9.style.backgroundColor = "white";
    box1.removeEventListener("click", easyBox1check);
    box2.removeEventListener("click", easyBox2check);
    box3.removeEventListener("click", easyBox3check);
    switch(manionknow) {
        case 1:
            box1.style.backgroundColor = chosenColor;
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            correctAnswer = 1;
            break;
        case 2:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = chosenColor;
            box3.style.backgroundColor = generateRGB();
            correctAnswer = 2;
            break;
        case 3:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = chosenColor;
            correctAnswer = 3;
            break;
    }
    box1.addEventListener("click", easyBox1check);
    box2.addEventListener("click", easyBox2check);
    box3.addEventListener("click", easyBox3check);
    console.log(`box 1: ${box1.style.backgroundColor}`);
    console.log(`box 2: ${box2.style.backgroundColor}`);
    console.log(`box 3: ${box3.style.backgroundColor}`);
    console.log(randomRed, randomGreen, randomBlue);
}
function mediumDifficulty() {
diffSwap()
    score.innerText = `Score: ${scoreCount}`;
    difficultyState = 2;
    console.log(difficultyState);
    h1.style.color = "white";
    randomRed = Math.floor(Math.random()* 256);
    randomGreen = Math.floor(Math.random()* 256);
    randomBlue = Math.floor(Math.random()* 256);
    guessColor.innerText = `Guess Color: rgb(${randomRed},${randomGreen},${randomBlue})`;
    chosenColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    let manionknow = Math.floor(Math.random() * 6) + 1;
    box7.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box9.style.backgroundColor = "white";
    box1.removeEventListener("click", mediumBox1check);
    box2.removeEventListener("click", mediumBox2check);
    box3.removeEventListener("click", mediumBox3check);
    box4.removeEventListener("click", mediumBox4check);
    box5.removeEventListener("click", mediumBox5check);
    box6.removeEventListener("click", mediumBox6check);
    switch(manionknow) {
        case 1:
            box1.style.backgroundColor = chosenColor;
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            correctAnswer = 1;
            break;
        case 2:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = chosenColor;
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            correctAnswer = 2;
            break;
        case 3:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = chosenColor;
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            correctAnswer = 3;
            break;
        case 4:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = chosenColor;
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            correctAnswer = 4;
            break;
        case 5:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = chosenColor;
            box6.style.backgroundColor = generateRGB();
            correctAnswer = 5;
            break;
        case 6:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = chosenColor;
            correctAnswer = 6;
            break;
    }
    box1.addEventListener("click", mediumBox1check);
    box2.addEventListener("click", mediumBox2check);
    box3.addEventListener("click", mediumBox3check);
    box4.addEventListener("click", mediumBox4check);
    box5.addEventListener("click", mediumBox5check);
    box6.addEventListener("click", mediumBox6check);
    console.log(`box 1: ${box1.style.backgroundColor}`);
    console.log(`box 2: ${box2.style.backgroundColor}`);
    console.log(`box 3: ${box3.style.backgroundColor}`);
    console.log(`box 4: ${box4.style.backgroundColor}`);
    console.log(`box 5: ${box5.style.backgroundColor}`);
    console.log(`box 6: ${box6.style.backgroundColor}`);
    console.log(randomRed, randomGreen, randomBlue);
}
function hardDifficulty() {
    diffSwap()
    score.innerText = `Score: ${scoreCount}`;
    difficultyState = 3;
    console.log(difficultyState);
    h1.style.color = "white";
    randomRed = Math.floor(Math.random()* 256);
    randomGreen = Math.floor(Math.random()* 256);
    randomBlue = Math.floor(Math.random()* 256);
    guessColor.innerText = `Guess Color: rgb(${randomRed},${randomGreen},${randomBlue})`;
    chosenColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    let manionknow = Math.floor(Math.random() * 9) + 1;
    box1.removeEventListener("click", hardBox1check);
    box2.removeEventListener("click", hardBox2check);
    box3.removeEventListener("click", hardBox3check);
    box4.removeEventListener("click", hardBox4check);
    box5.removeEventListener("click", hardBox5check);
    box6.removeEventListener("click", hardBox6check);
    box7.removeEventListener("click", hardBox7check);
    box8.removeEventListener("click", hardBox8check);
    box9.removeEventListener("click", hardBox9check);
    switch(manionknow) {
        case 1:
            box1.style.backgroundColor = chosenColor;
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 1;
            break;
        case 2:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = chosenColor;
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 2;
            break;
        case 3:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = chosenColor;
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 3;
            break;
        case 4:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = chosenColor;
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 4;
            break;
        case 5:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = chosenColor;
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 5;
            break;
        case 6:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = chosenColor;
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 6;
            break;
        case 7:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = chosenColor;
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 7;
            break;
        case 8:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = chosenColor;
            box9.style.backgroundColor = generateRGB();
            correctAnswer = 8;
            break;
        case 9:
            box1.style.backgroundColor = generateRGB();
            box2.style.backgroundColor = generateRGB();
            box3.style.backgroundColor = generateRGB();
            box4.style.backgroundColor = generateRGB();
            box5.style.backgroundColor = generateRGB();
            box6.style.backgroundColor = generateRGB();
            box7.style.backgroundColor = generateRGB();
            box8.style.backgroundColor = generateRGB();
            box9.style.backgroundColor = chosenColor;
            correctAnswer = 9;
            break;
    }
    box1.addEventListener("click", hardBox1check);
    box2.addEventListener("click", hardBox2check);
    box3.addEventListener("click", hardBox3check);
    box4.addEventListener("click", hardBox4check);
    box5.addEventListener("click", hardBox5check);
    box6.addEventListener("click", hardBox6check);
    box7.addEventListener("click", hardBox7check);
    box8.addEventListener("click", hardBox8check);
    box9.addEventListener("click", hardBox9check);
    console.log(`box 1: ${box1.style.backgroundColor}`);
    console.log(`box 2: ${box2.style.backgroundColor}`);
    console.log(`box 3: ${box3.style.backgroundColor}`);
    console.log(`box 4: ${box4.style.backgroundColor}`);
    console.log(`box 5: ${box5.style.backgroundColor}`);
    console.log(`box 6: ${box6.style.backgroundColor}`);
    console.log(`box 7: ${box7.style.backgroundColor}`);
    console.log(`box 8: ${box8.style.backgroundColor}`);
    console.log(`box 9: ${box9.style.backgroundColor}`);
    console.log(randomRed, randomGreen, randomBlue);
}

easy.addEventListener('click', easyDifficulty);
medium.addEventListener('click', mediumDifficulty);
hard.addEventListener('click', hardDifficulty);
reset.addEventListener('click', reseter);

function reseter() {
    chosenColor = '';
    correctAnswer = 0;
    difficultyState;
    h1.innerText = "Choose difficulty to start";
    h1.style.color = "black";
    scoreCount = 0;
    score.innerText = `Score: ${scoreCount}`;
    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "white";
    box4.style.backgroundColor = "white";
    box5.style.backgroundColor = "white";
    box6.style.backgroundColor = "white";
    box7.style.backgroundColor = "white";
    box8.style.backgroundColor = "white";
    box9.style.backgroundColor = "white";
    guessColor.innerText = "Guess Color:";
    easy.removeEventListener('click', easyDifficulty);
    medium.removeEventListener('click', mediumDifficulty);
    hard.removeEventListener('click', hardDifficulty);
    easy.addEventListener('click', easyDifficulty);
    medium.addEventListener('click', mediumDifficulty);
    hard.addEventListener('click', hardDifficulty);
    diffSwap()
}
function diffSwap() {
    box1.removeEventListener("click", hardBox1check);
    box2.removeEventListener("click", hardBox2check);
    box3.removeEventListener("click", hardBox3check);
    box4.removeEventListener("click", hardBox4check);
    box5.removeEventListener("click", hardBox5check);
    box6.removeEventListener("click", hardBox6check);
    box7.removeEventListener("click", hardBox7check);
    box8.removeEventListener("click", hardBox8check);
    box9.removeEventListener("click", hardBox9check);
    box1.removeEventListener("click", mediumBox1check);
    box2.removeEventListener("click", mediumBox2check);
    box3.removeEventListener("click", mediumBox3check);
    box4.removeEventListener("click", mediumBox4check);
    box5.removeEventListener("click", mediumBox5check);
    box6.removeEventListener("click", mediumBox6check);
    box1.removeEventListener("click", easyBox1check);
    box2.removeEventListener("click", easyBox2check);
    box3.removeEventListener("click", easyBox3check);
}