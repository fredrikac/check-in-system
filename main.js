
// SETUP
console.log("Laddat in sida");
//skapa en tom array för kön
let myQueue = [];
//Skriv ut array för att visa att den är tom vid start
console.log(myQueue);
//peka på list-elementet 
let queueList = document.querySelector("#olList");

//peka på knapparna
let addButton = document.querySelector("#addButton");
let fastTrackButton = document.querySelector("#fastTrackButton");
let checkInButton = document.querySelector("#checkIn");

//peka på input-fältet
let userInput = document.querySelector("#userInput");

//TEXT "CURRENTLY NO ONE IN LINE" ELLER LISTA
let infoText = document.createElement("h2");
let infoTextContainer = document.querySelector("#container");

infoTextContainer.appendChild(infoText);
    
let emptyQueue = "There's currently no people waiting in line."
let fullQueue = "Queue to check in for Flight 666";

infoText.innerText = emptyQueue;
    


//FUNKTION KOLLA INPUTFÄLTET
function inputOk (){
    if(userInput.value === ""){//om input-fältet är tomt, ge en alert till användaren
        alert("Please type the name of the person to check in!");
        console.log("Fältet namn är tomt");
         
    }else if(myQueue.includes(userInput.value.toLowerCase())){//kolla om personen redan står i kön. OM ja, alert
        alert("This person is already standing in line!")
        console.log("Namnet finns redan");
        return false;
    }
    else{
        return true;
    }
}

//KNAPPAR OCH INPUT
//går det att göra en funktion för att korta ner koden som upprepas i båda knapparna? 
addButton.addEventListener("click", ()=>{
    console.log("Användaren klickade på 'Add'");
    infoText.innerText = fullQueue;//plocka bort texten i h2an

    if(inputOk()){//Anropar funktionen inputOk 
        myQueue.push(userInput.value.toLowerCase()); //Push för att lägga till personen längst bak i arrayen
        let listItem = document.createElement("li"); //skapa list-item
        listItem.innerText = userInput.value; //ge listItem värdet av användarens inmatning
        queueList.appendChild(listItem);//lägg till listItem i ul-listan
        console.log(myQueue)//skriver ut arrayen i konsolen
        userInput.value = "";//rensar input-fältet
    }
});


fastTrackButton.addEventListener("click", ()=>{
    console.log("Användaren klickade på 'Fast track'");
    infoText.innerText = "";
    if(inputOk()){
        myQueue.unshift(userInput.value.toLowerCase()); //Unshift för att lägga till personen längst fram i arrayen
        let listItem = document.createElement("li"); //skapa list-item
        listItem.innerText = userInput.value; //ge listItem värdet av användarens inmatning
        queueList.prepend(listItem);//lägger listItem först i ol-listan
        console.log(myQueue);//skriver ut arrayen i konsolen
        userInput.value = "";
    }
})

//CHECK IN-knappen
checkInButton.addEventListener("click", (e)=>{
   console.log("Användaren klickade på 'Check in'");
   let firstChild = queueList.firstElementChild;//skapar en variabel för det första childet av ol-elementet, dvs li
   console.log(firstChild);//skriver ut första childet i konsolen
   myQueue.forEach((person, index)=>{//loopar igenom arrayen och kollar om person är först i listan
       if(person === firstChild){
           myQueue.splice(index, 1);//tar bort första item i arrayen
       }
   })
   queueList.removeChild(firstChild);//tar bort det första li-elementet 
   console.log(myQueue);
})

