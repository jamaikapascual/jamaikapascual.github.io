import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';


//function for generating unique id
function generateUniqueID(firstName, lastName){
    let uniqueID = firstName[0].toLowerCase()+ lastName.toLowerCase();
    let uniqueString= uuidv4().slice(0, 8);
    return uniqueID + uniqueString

}


export default generateUniqueID