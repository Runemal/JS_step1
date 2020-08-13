//Задание 1-3
/* Попытка работать через fontsawesome неудачная: в 4 версии нет необходимых иконок. В 5 версии после добавления класса к диву, дополнительно подключаются классы стилей и происходит изменение размера ячейки. Если вручную поменять, например, размер ячейки, то обнуляется оформление ячейки и темная клетка становится светлой.

*/
var gameBoard = {
    cells : [],
    startCoords: {
        x: 0,
        y: 0,
    }
}

var player = {
    coords: {
        x: 0,
        y: 0,
    },
}

var BOARD = [" ABCDEFGH ",
             "8 = = = =8",
             "7= = = = 7",
             "6 = = = =6",
             "5= = = = 5",
             "4 = = = =4",
             "3= = = = 3",
             "2 = = = =2",
             "1= = = = 1",
             " ABCDEFGH "];

var startPositionWhiteKing = {
    x: 5,
    y: 8,
}
var startPositionWhiteQueen = {
    x: 4,
    y: 8,
}
var startPositionWhiteLeftBishop = {
    x: 3,
    y: 8,
}
var startPositionWhiteRightBishop = {
    x: 6,
    y: 8,
}
var startPositionWhiteLeftKnight = {
    x: 2,
    y: 8,
}
var startPositionWhiteRightKnight = {
    x: 7,
    y: 8,
}
var startPositionWhiteLeftRook = {
    x: 1,
    y: 8,
}
var startPositionWhiteRightRook = {
    x: 8,
    y: 8,
}
var startPositionWhitePawn1 = {
    x: 1,
    y: 7,
}
var startPositionWhitePawn2 = {
    x: 2,
    y: 7,
}
var startPositionWhitePawn3 = {
    x: 3,
    y: 7,
}
var startPositionWhitePawn4 = {
    x: 4,
    y: 7,
}
var startPositionWhitePawn5 = {
    x: 5,
    y: 7,
}
var startPositionWhitePawn6 = {
    x: 6,
    y: 7,
}
var startPositionWhitePawn7 = {
    x: 7,
    y: 7,
}
var startPositionWhitePawn8 = {
    x: 8,
    y: 7,
}

var startPositionBlackKing = {
    x: 5,
    y: 1,
}
var startPositionBlackQueen = {
    x: 4,
    y: 1,
}
var startPositionBlackLeftBishop = {
    x: 3,
    y: 1,
}
var startPositionBlackRightBishop = {
    x: 6,
    y: 1,
}
var startPositionBlackLeftKnight = {
    x: 2,
    y: 1,
}
var startPositionBlackRightKnight = {
    x: 7,
    y: 1,
}
var startPositionBlackLeftRook = {
    x: 1,
    y: 1,
}
var startPositionBlackRightRook = {
    x: 8,
    y: 1,
}
var startPositionBlackPawn1 = {
    x: 1,
    y: 2,
}
var startPositionBlackPawn2 = {
    x: 2,
    y: 2,
}
var startPositionBlackPawn3 = {
    x: 3,
    y: 2,
}
var startPositionBlackPawn4 = {
    x: 4,
    y: 2,
}
var startPositionBlackPawn5 = {
    x: 5,
    y: 2,
}
var startPositionBlackPawn6 = {
    x: 6,
    y: 2,
}
var startPositionBlackPawn7 = {
    x: 7,
    y: 2,
}
var startPositionBlackPawn8 = {
    x: 8,
    y: 2,
}

function initBoard(board) {
    gameBoard.element = document.getElementById("board");
    gameBoard.cells = [];
    for (var i = 0; i<board.length; i++) {
        gameBoard.cells[i] = [];
        for (var j = 0; j<board[i].length; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            switch (board[i][j]) {
                case "A" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#65';
                    break;
                case "B" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#66;';
                    break;
                case "C" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#67';
                    break;
                case "D" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#68';
                    break;
                case "E" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#69';
                    break;
                case "F" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#70';
                    break;
                case "G" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#71';
                    break;
                case "H" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#72';
                    break;
                case "1" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#49';
                    break;
                case "2" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#50';
                    break;
                case "3" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#51';
                    break;
                case "4" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#52';
                    break;
                case "5" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#53';
                    break;
                case "6" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#54';
                    break;
                case "7" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#55';
                    break;
                case "8" :
                    gameBoard.cells[i][j] = { type: "Wall", element: cell };
                    cell.innerHTML ='&#56';
                    break;
                case " " :
                    gameBoard.cells[i][j] = { type: "White", element: cell };
                    break;
                default:
                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                    cell.style.cssText = 'background-color: darkgrey;';
            }
            gameBoard.element.appendChild(cell);
        }
    }
 /*   gameBoard.startCoords.x = startPositionWhiteLeftRock.x;
    gameBoard.startCoords.y = startPositionWhiteLeftRock.y;
    gameBoard.cells[startPositionWhiteLeftRock.y][startPositionWhiteLeftRock.x].element.innerHTML ='&#9814';
//    gameBoard.cells[startPositionWhiteLeftRock.y][startPositionWhiteLeftRock.x].element.classList.add("fal","fa-chess-rook");
//    gameBoard.cells[startPositionWhiteLeftRock.y][startPositionWhiteLeftRock.x].element.style.cssText = 'width: 1.1em;';
    gameBoard.startCoords.x2 = startPositionWhiteRightRock.x;
    gameBoard.startCoords.y2 = startPositionWhiteRightRock.y;
    gameBoard.cells[startPositionWhiteRightRock.y][startPositionWhiteRightRock.x].element.innerHTML ='&#9814'; */
}

function initWhiteKing(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteKing.y][startPositionWhiteKing.x].element.innerHTML ='&#9812';
}
function initWhiteQueen(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteQueen.y][startPositionWhiteQueen.x].element.innerHTML ='&#9813';
}
function initWhiteLeftBishop(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteLeftBishop.y][startPositionWhiteLeftBishop.x].element.innerHTML ='&#9815';
}
function initWhiteRightBishop(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteRightBishop.y][startPositionWhiteRightBishop.x].element.innerHTML ='&#9815;';
}
function initWhiteLeftRook(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteLeftRook.y][startPositionWhiteLeftRook.x].element.innerHTML ='&#9814';
}
function initWhiteRightRook(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteRightRook.y][startPositionWhiteRightRook.x].element.innerHTML ='&#9814';
}
function initWhiteLeftKnight(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteLeftKnight.y][startPositionWhiteLeftKnight.x].element.innerHTML ='&#9816';
}
function initWhiteRightKnight(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhiteRightKnight.y][startPositionWhiteRightKnight.x].element.innerHTML ='&#9816;';
}
function initWhitePawn1(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn1.y][startPositionWhitePawn1.x].element.innerHTML ='&#9817';
}
function initWhitePawn2(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn2.y][startPositionWhitePawn2.x].element.innerHTML ='&#9817';
}
function initWhitePawn3(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn3.y][startPositionWhitePawn3.x].element.innerHTML ='&#9817';
}
function initWhitePawn4(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn4.y][startPositionWhitePawn4.x].element.innerHTML ='&#9817';
}
function initWhitePawn5(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn5.y][startPositionWhitePawn5.x].element.innerHTML ='&#9817';
}
function initWhitePawn6(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn6.y][startPositionWhitePawn6.x].element.innerHTML ='&#9817';
}
function initWhitePawn7(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn7.y][startPositionWhitePawn7.x].element.innerHTML ='&#9817';
}
function initWhitePawn8(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionWhitePawn8.y][startPositionWhitePawn8.x].element.innerHTML ='&#9817';
}

function initBlackKing(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackKing.y][startPositionBlackKing.x].element.innerHTML ='&#9818';
}
function initBlackQueen(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackQueen.y][startPositionBlackQueen.x].element.innerHTML ='&#9819';
}
function initBlackLeftBishop(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackLeftBishop.y][startPositionBlackLeftBishop.x].element.innerHTML ='&#9821';
}
function initBlackRightBishop(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackRightBishop.y][startPositionBlackRightBishop.x].element.innerHTML ='&#9821;';
}
function initBlackLeftRook(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackLeftRook.y][startPositionBlackLeftRook.x].element.innerHTML ='&#9820';
}
function initBlackRightRook(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackRightRook.y][startPositionBlackRightRook.x].element.innerHTML ='&#9820';
}
function initBlackLeftKnight(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackLeftKnight.y][startPositionBlackLeftKnight.x].element.innerHTML ='&#9822';
}
function initBlackRightKnight(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackRightKnight.y][startPositionBlackRightKnight.x].element.innerHTML ='&#9822;';
}
function initBlackPawn1(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn1.y][startPositionBlackPawn1.x].element.innerHTML ='&#9823';
}
function initBlackPawn2(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn2.y][startPositionBlackPawn2.x].element.innerHTML ='&#9823';
}
function initBlackPawn3(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn3.y][startPositionBlackPawn3.x].element.innerHTML ='&#9823';
}
function initBlackPawn4(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn4.y][startPositionBlackPawn4.x].element.innerHTML ='&#9823';
}
function initBlackPawn5(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn5.y][startPositionBlackPawn5.x].element.innerHTML ='&#9823';
}
function initBlackPawn6(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn6.y][startPositionBlackPawn6.x].element.innerHTML ='&#9823';
}
function initBlackPawn7(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn7.y][startPositionBlackPawn7.x].element.innerHTML ='&#9823';
}
function initBlackPawn8(board) {
    player.coords.x = board.startCoords.x;
    player.coords.y = board.startCoords.y;
    gameBoard.cells[startPositionBlackPawn8.y][startPositionBlackPawn8.x].element.innerHTML ='&#9823';
}

initBoard(BOARD);

initWhiteLeftRook(gameBoard);
initWhiteRightRook(gameBoard);
initWhiteLeftKnight(gameBoard);
initWhiteRightKnight(gameBoard);
initWhiteLeftBishop(gameBoard);
initWhiteRightBishop(gameBoard);
initWhiteKing(gameBoard);
initWhiteQueen(gameBoard);
initWhitePawn1(gameBoard);
initWhitePawn2(gameBoard);
initWhitePawn3(gameBoard);
initWhitePawn4(gameBoard);
initWhitePawn5(gameBoard);
initWhitePawn6(gameBoard);
initWhitePawn7(gameBoard);
initWhitePawn8(gameBoard);

initBlackLeftRook(gameBoard);
initBlackRightRook(gameBoard);
initBlackLeftKnight(gameBoard);
initBlackRightKnight(gameBoard);
initBlackLeftBishop(gameBoard);
initBlackRightBishop(gameBoard);
initBlackKing(gameBoard);
initBlackQueen(gameBoard);
initBlackPawn1(gameBoard);
initBlackPawn2(gameBoard);
initBlackPawn3(gameBoard);
initBlackPawn4(gameBoard);
initBlackPawn5(gameBoard);
initBlackPawn6(gameBoard);
initBlackPawn7(gameBoard);
initBlackPawn8(gameBoard);

