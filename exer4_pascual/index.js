import {v4 as uuidv4} from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';


//function for generating unique id
function generateUniqueID(firstName, lastName){
    let uniqueID = firstName[0].tolowerCase()+ lastName.tolowerCase();
    let uniqueString= uuidv4(8);
    return uniqueID + uniqueString.randomAlphanumeric(8);

}

export default generateUniqueID