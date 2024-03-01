//function for checking if 2 passwords match
function validatePassword(password1, password2){

    //check if the password1 and password2 are at least 8 characters
    if ( password1.length < 8 ){
        return false;
    }
    else if(password2.length < 8) {
        return false;
    }

    //check if password1 contains any digit
    let pass1Num = false;
    for(let i=0; i < password1.length; i++){
        if (password1[i]>='0' && password1[i]<= '9'){
            pass1Num = true;
        }
    }

    if (pass1Num == false){
        return false;
    }

    //check if password2 contains any digit
    let pass2Num = false;
    for(let j=0; j < password2.length; j++){
        if (password2[j]>='0' && password2[j]<= '9'){
            pass2Num = true;
        }
    }

    if (pass2Num == false){
        return false;
    }

    //check if password1 has at least one uppercase
    if(password1 == password1.toLowerCase()){
        return false;
    //check if password1 has at least one lowercase
    }else if (password1 == password1.toUpperCase()){
        return false;
    }
    //check if password2 has at least one uppercase
    if(password2 == password2.toLowerCase()){
        return false;
    //check if password1 has at least one lowercase
    }else if (password2 == password2.toUpperCase()){
        return false;
    }

    if(password1=== password2){
        return true;
    }else{
        return false;
    }


}


// console.log(validatePassword("helloworld", "hello")) // returns false
// console.log(validatePassword("hello", "hello")) // returns false
// console.log(validatePassword("hello1234", "hello1234")) // returns false
// console.log(validatePassword("Hello1234", "Hello1234")) // returns true
// console.log(validatePassword("HELLO1234", "HELLO1234")) // returns false




