const carOne = document.getElementById("car1")
const carTwo = document.getElementById("car2")

console.log("hello")
setTimeout(()=>{
    carOne.style.left = '160%'
    carTwo.style.left = '160%'
},100)






let carOnePOsition = 150
let carTwoPOsition = 150
let isGameOver = false
const carOneConstantMove = ()=>{
    const carOneMOve = setInterval(() => {
        if (isGameOver){
            clearInterval(carOneMOve)
        }
        if(carOnePOsition >= 470){
            isGameOver = true
        }
        carOnePOsition += 3
        carOne.style.left = carOnePOsition + "%"
    }, 30);
}





const startGame = ()=>{
    carOneConstantMove()
}
startGame()