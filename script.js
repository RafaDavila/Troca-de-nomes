let spaceShip = prompt("Digite o nome:")

let charToReplace = prompt("Qual caractere você deseja substituir?")

let replacementdChar = prompt("Por qual caractere você deseja substituir?")

let newSpaceShip = ""

for(let pos = 0; pos < spaceShip.length; pos++) {
    if(spaceShip[pos] == charToReplace) {
        newSpaceShip += replacementdChar
    }else{
        newSpaceShip += spaceShip[pos]
    }
}

alert("O novo nome é: " +newSpaceShip)