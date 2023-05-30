const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const  newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;
let winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,3,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Game initialization

function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player-${currentPlayer}`;
}
initGame();

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
handleClick(index);
    })
})

function handleClick(index){
    boxes[index].innerText=currentPlayer;
    gameGrid[index]=currentPlayer;
    boxes[index].style.pointerEvents="none";
    swapTurn();
    checkGameOver();
}
function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X"
    }
    gameInfo.innerText=`Current Player-${currentPlayer}`;
}


newGameBtn.addEventListener("click",initGame);



