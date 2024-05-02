let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "#83781B";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#172815";
            turnO = true;
        }

        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game Draw!!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pat of pattern){
        // console.log(pat[0], pat[1], pat[2]);
        // console.log(
        //     boxes[pat[0]].innerText;
        //     boxes[pat[1]].innerText;
        //     boxes[pat[2]].innerText;
        // );

        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("winner");
                showWinner(pos1);
                return true;
            }
        }
    }
}   

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



