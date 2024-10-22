const options = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");
const userResult = document.querySelector(".user-result img");
const computerResult = document.querySelector(".computer-result img");

const computerSrcImages = [
    "images/pedra.png",
    "images/papel.png",
    "images/tesoura.png"]


const winner = {
    RR: "Empate",
    RP: "Voce perdeu",
    RS: "Voce ganhou",
    PP: "Empate",
    PR: "Voce ganhou",
    PS: "Voce perdeu",
    SS: "Empate",
    SR: "Voce perdeu",
    SP: "Voce ganhou",
}


function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex= Array.from(options).indexOf(clickedImage)

    

    container.classList.add('start')
    resultText.innerHTML = "..."

    userResult.src = computerResult.src = computerSrcImages[0]

    setTimeout(() => {
        container.classList.remove('start')

        userResult.src = computerSrcImages[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImages.length);
        computerResult.src = computerSrcImages[randomNumber]
        
        const userValue = ["R", "P", "S"][userIndex]
        const computerValue = ["R", "P", "S"][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]


        resultText.innerHTML = userValue === computerValue ? "Empate" : finalResult
    }, 2000);
}






options.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})
