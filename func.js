const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const scoreDisplay = document.getElementById('score')
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000
let speed = 0.9

function createGrid() {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        //created a loop with 100 div inside
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

function move() {
    if (
        (currentSnake[0] + width >= width * width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width - 1 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timer)

    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')

    currentSnake.unshift(currentSnake[0] + direction)

    if (squares[currentSnake[0]].classList.contains('apple')) {
        //remove the class of apple
        squares[currentSnake[0]].classList.remove('apple')
        //grow our snake by adding class of snake to it
        squares[tail].classList.add('snake')
        //grow our snake array
        currentSnake.push(tail)
        //generate new apple
        generateApple()
        //add one to the score
        score++
        //display our score
        scoreDisplay.textContent = score
        //speed up our snake
        clearInterval(timer)
        console.log(intervalTime)
        intervalTime = intervalTime * speed
        console.log(intervalTime)
        timer = setInterval(move, intervalTime)
    }

    squares[currentSnake[0]].classList.add('snake')

    /*
    const head = currentSnake.unshift(currentSnake[0] + direction)
    squares[head].classList.add('snake') 
     */
}
move()

let timer = setInterval(move, intervalTime)

function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}
generateApples()

function control(e) {
    if (e.keyCode === 37) {
        console.log('left')
        direction = -1
    } else if (e.keyCode === 38) {
        console.log('up')
        direction = -width
    } else if (e.keyCode === 39) {
        console.log('right')
        direction = +1
    } else if (e.keyCode === 40) {
        console.log('down')
        direction = +width
    }
}
document.addEventListener('keyup', control)
