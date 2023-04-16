const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playTo')
const resetButton = document.querySelector('#reset');

let p1score = 0;
let p2score = 0;
let winningScore = 6;
let isGameOver = false;


p1button.addEventListener('click', () =>{
    if(!isGameOver)
    {
        p1score++;
        if(p1score === winningScore)
        {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1Display.textContent = p1score;
    }
})

p2button.addEventListener('click', () => {
    if(!isGameOver)
    {
        p2score++;
        if(p2score === winningScore)
        {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p2Display.textContent = p2score;
    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset()
{
    p1score = 0;
    p2score = 0;
    isGameOver = false;

    p1Display.textContent = 0;
    p2Display.textContent = 0;

    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
    p1button.disabled = false;
    p2button.disabled = false;
}