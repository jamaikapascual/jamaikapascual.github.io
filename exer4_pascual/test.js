import {generateUniqueID, addAccount} from './index.js'

//test cases for generatingUniqueID
console.log("Sample unique IDs:")
console.log(generateUniqueID("Alan", "Turing"))
console.log(generateUniqueID("Jamaika", "Pascual"))

console.log("")

//test cases addAccount
console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]))
console.log(addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]))

