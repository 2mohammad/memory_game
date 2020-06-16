const gameDiv = document.querySelector('#game');
const startGame = document.querySelector('#start');
const totalSquares = 10;
const boxesToMatch = 2;
const arrayColors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];
console.log(startGame);
startGameNow();
function startGameNow(){
    startGame.addEventListener('click', function(){
        squareMaker();
        gameClicker();
    }

        

    );

}


function gameClicker(){
    let colorChoices = [];
    let colorBoxIds = [];

    
    gameDiv.addEventListener('click', function(e){

        let color = e.target.className;
        e.target.style.backgroundColor = color;

        setTimeout(function() {
            if (e.target.className !== ''){
            e.target.style.backgroundColor = 'white';
            }
        }, 1000);

        if (e.target.className !== '' && colorChoices.length < 3){
            colorBoxIds.push(e.target.id);
            colorChoices.push(color);
        }
        if (e.target.className !== '' && colorChoices.length == 2){

            if (colorChoices[0] === colorChoices[1] && colorBoxIds[0] !== colorBoxIds[1]){// ){
                console.log("found match");
                e.target.parentElement.childNodes[parseInt(colorBoxIds[0])].style.backgroundColor = `${colorChoices[1]}`;
                e.target.parentElement.childNodes[parseInt(colorBoxIds[1])].style.backgroundColor = `${colorChoices[1]}`;
                e.target.parentElement.childNodes[parseInt(colorBoxIds[0])].className = '';
                e.target.parentElement.childNodes[parseInt(colorBoxIds[1])].className = '';
                console.log(e.target.parentElement.childNodes[parseInt(colorBoxIds[0])].className);
                console.log(e.target.parentElement.childNodes[parseInt(colorBoxIds[1])].className);

                colorBoxIds = [];
                colorChoices = [];

            }
            else{
                colorBoxIds.shift();
                colorChoices.shift();
            }


            
             
        }


 


});
}


function squareMaker(){
    for (let i = 0; i !== totalSquares; i++){
        const colorBox = document.createElement('div');
        colorAssigner(colorBox, arrayColors);
        colorBox.id = i+1;
        //colorBox.classList.add('not-visible');
        gameDiv.append(colorBox);
        console.log(colorBox);

    } 
}

function colorAssigner(colorBox, arrayColors){
    let randomNumber = randomNumberGen();
    if (arrayColors[randomNumber] !== ''){
        colorBox.classList.add(arrayColors[randomNumber]);
        arrayColors[randomNumber] = '';
        return colorBox;
    } else {
        colorAssigner(colorBox, arrayColors);   
    }
}

function randomNumberGen(){
    const randomNumber = Math.floor(Math.random()*totalSquares); 
    return randomNumber;
}


