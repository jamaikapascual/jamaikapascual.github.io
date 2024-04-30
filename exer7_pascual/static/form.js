const details = document.getElementsByClassName('details');
const profiles = document.getElementsByClassName('profile');

const addCard = () => {
    let isValid = true;

    for (let i=0; i<(details.length)-1; i++) {
        if ((details[i].value == "")) {
            isValid = false;
            break;
        }
    }

    if(isValid){

        alert('Adding Food');
        
        var rank = document.getElementById("rank").value;
        const card = document.createElement("div");
        card.classList.add("profile");
        card.setAttribute('id', rank);

        // for(let i=0; i<(details.length)-1; i++){
        //     const newElement = document.createElement('span');
        //     newElement.innerHTML = '<p>'+document.getElementsByClassName("details")[i].value + '<p>';
        //     document.getElementsByClassName("middle_card")[0].appendChild(card);
        //     document.getElementsByClassName("profile")[rank].appendChild(newElement);
        // }
        document.getElementsByClassName("middle_card")[0].appendChild(card);
    
        const img = document.createElement("div");
        img.innerHTML = '<img src="'+document.getElementById("img").value+'" height="100" width="120">';
        document.getElementsByClassName("profile")[rank-1].appendChild(img);
        
        const fName = document.createElement("div")
        fName.innerHTML = '<p>'+ document.getElementById("foodname").value +'<p>';
        document.getElementsByClassName("profile")[rank-1].appendChild(fName);

        const desc = document.createElement("div")
        desc.innerHTML = '<p>'+ document.getElementById("description").value +'<p>';
        document.getElementsByClassName("profile")[rank-1].appendChild(desc);

        const delButton = document.createElement("button")
        delButton.setAttribute('id', rank);
        delButton.classList.add("delete");
        delButton.innerText = 'Delete Food';
        document.getElementsByClassName("profile")[rank-1].appendChild(delButton);

        event.preventDefault();
        document.getElementById('form').reset(); 
    }     
}

const buttonsControl = (button) => {
    for(let x=0; x<profiles.length; x++){
        if(profiles[x].id == button.id){
            const mainCard = document.getElementsByClassName("middle_card")[0];mainCard.removeChild(profiles[x]);
        }
    }
}

const deleteButtons = document.getElementsByClassName('delete');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", buttonsControl(deleteButtons[i]))
}
  
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addCard)