const prompt = require("prompt-sync")();

function makeMove(turn,board){
    while(true){
        const row = parseFloat(prompt("Enter row: "));
        const col = parseFloat(prompt("Enter col: "));

        if(isNaN(row) || row < 1 || row > 3 ){
        console.log("Invalid row");
        }
        else if(isNaN(col) || col< 1 || col > 3 ){
            console.log("Invalid column");
        }
        else if(board[row - 1 ][col - 1 ] != " "){
            console.log("Invalid position");
        }
        else{
            board[row - 1][col - 1] = turn;
            break;
        }
    }
}

function printBoard(boardd){
    for(let i = 0; i < board.length ; i++){
        const row = board[i];
        let rowString = "";
        for( let j = 0 ; j < board[i].length ; j++){
            rowString += row[j];
            if(j !== row.length - 1) rowString += " | "
        }
        console.log(rowString);
        if(i !== board.length - 1) console.log("-----------");
    }
}

function winning(board){
    const lines =[
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
    ];
    for( let line of lines){
        let win = true;
        for( let pos of line){
            const [row,col] = pos;
            if(board[row][col] !== turn){
                win = false;
                break;
            }
        }
        if(win) return true;
    }
    return false;
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let turn = "X";
let turnCount = 0;
let won = false;

while(turnCount < 9){
    console.log(turn, "playes turn");
    makeMove(turn,board);
    printBoard(board);
    console.log();
    const win = winning(board);
    if(win){
        won = true;
        console.log(turn, "has won!");
        break;
    }
    if(turn === "X") turn = "O";
    else turn = "X";

    turnCount++;
}
if(!won )console.log(" Tie game!");

