const carOne = document.getElementById("car1")
const carTwo = document.getElementById("car2")
const wordBox = document.getElementById("wordBox")
const inputWord = document.getElementById("typer-word")
const modal = document.getElementById("modal")


console.log("hello")
setTimeout(() => {
    carOne.style.left = '160%'
    carTwo.style.left = '160%'
}, 100)




let carOnePOsition = 150
let carTwoPOsition = 150
let isGameOver = false
const words = [
    "kamrujjaman",
    "habib",
    "rayhan",
    "maruf",
    "sajjad",
    "rofik",
    "the",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "lazy",
    "dog",
    "sun",
    "moon",
    "start",
    "tree",
    "river",
    "hill",
    "skill"
]

const typeHandler = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    wordBox.innerText = randomWord

    inputWord.addEventListener("input", (e) => {
        if (e.target.value === randomWord) {
            inputWord.value = "";
            carTwoPOsition += 15;
            carTwo.style.left = carTwoPOsition + "%";
            if (carTwoPOsition >= 490) {
                isGameOver = true;
                winner("You win")
            }
            typeHandler()
        }
    })
}

const winner = (stats) => {
    modal.innerHTML = `
        <div class="bg-green-600 p-14   h-52  flex flex-col items-center justify-center">
      <h2 class="text-5xl font-bold"> ${stats} </h2>
      <h2 class="text-3xl">Your WPM: 30</h2>
    </div>
    `
}


const carOneConstantMove = () => {
    const carOneMOve = setInterval(() => {
        if (isGameOver) {
            clearInterval(carOneMOve)
        }
        if (carOnePOsition >= 490) {
            isGameOver = true
            winner("You Lost")
        }
        carOnePOsition += 0.7
        carOne.style.left = carOnePOsition + "%"
    }, 30);
}

const carTwoConstantMove = () => {
    const carTwoMove = setInterval(() => {
        if (isGameOver) {
            clearInterval(carTwoMove)
        }

        if (carTwoPOsition >= 490) {
            isGameOver = true
            winner("You Win")

        }
        carTwoPOsition += 0.5 
        carTwo.style.left = carTwoPOsition + "%"
    }, 30);
}




const startGame = () => {
    setTimeout(() => {
        carOneConstantMove()
        carTwoConstantMove()
    }, 1000);

    typeHandler()
}
startGame()