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


//function for reversing the password
function reversePassword(password){
    let reversedPass = '';
    for (let i = password.length -1; i>=0; i--){
        reversedPass = reversedPass + password[i];
    }
    return reversedPass;

}

//console.log(reversePassword("Pass1234"));

//function for storing a password
function storePassword(name, pw1,pw2){
    let newPassword= '';
    if (validatePassword(pw1,pw2)){
        newPassword = reversePassword(pw1);
    }else{
        newPassword =pw1;
    }

    const user={
        name: name,
        newpassword: newPassword
    }

    return user;

}

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));




