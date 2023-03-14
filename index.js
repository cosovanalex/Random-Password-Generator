
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword1 = ""
    let randomPassword2 = ""
    let pswDisplay1 = document.getElementById("psw-display1")
    let pswDisplay2 = document.getElementById("psw-display2")

    // Clear the contents of the display divs
    pswDisplay1.textContent = ""
    pswDisplay2.textContent = ""

    // Generate the random passwords
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter()
        randomPassword2 += getRandomCharacter()
    }

    // Set the text content of the display divs to the generated passwords
    pswDisplay1.textContent = randomPassword1
    pswDisplay2.textContent = randomPassword2
}

