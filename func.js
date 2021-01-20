const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [0,1,2]

function createGrid() {
    for(var i= 0 ; i < 100 ; i++){
        const square = document.createElement('div')
        //created a loop with 100 divs inside
        console.log(square)
        square.classList.add('square')
        //added styling
        grid.appendChild(square)
        //squares pushed to the grid
        squares.push(square)
        //squares pushed to a new array
    }
}

createGrid()
currentSnake.forEach(index => squares[index].classList.add('snake'))