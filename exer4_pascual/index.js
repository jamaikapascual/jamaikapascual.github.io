import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';


//function for generating unique id
function generateUniqueID(firstName, lastName){
    let uniqueID = firstName[0].toLowerCase()+ lastName.toLowerCase();
    let uniqueString= uuidv4().slice(0, 8);
    return uniqueID + uniqueString

}


function  addAccount(information){
    //checks if the first name, last name, and email is a non-empty string
    if(information[0].length == 0 && information[1].length == 0 && information[2].length == 0) {
		console.log("Error! First name, last name, and email must be valid.");
		return false;
    //checks if age is at least 18
	}else if(information[3] < 18) {
		console.log("Error! Age must be at least 18.");
		return false;
    //checks if the email is valid
	}else if(validator.isEmail(information[2]) == false) {
		console.log("Error! Invalid email.");
		return false;
    //saves the data to a new file
	}else {
	 	let uniqueID = generateUniqueID(information[0], information[1]);
	 	let data = information[0] + ',' + information[1] + ',' + information[2] + ',' + information[3] + ',' + uniqueID + '\n';
	 	try	{
			appendFileSync("users.txt", data);
			console.log("Account added!");
	 		return true;
		} catch (err) {
			console.log("Account not added.")
		}
	}
}

export {generateUniqueID, addAccount}