
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
let infoText = document.createElement("h2");//skapar en h2 för text
let infoTextContainer = document.querySelector("#container");//pekar på en div
infoTextContainer.appendChild(infoText);//lägger till h2 i div
let emptyQueue = "There's currently no people waiting in line."//meddelande för tom kö
let fullQueue = "Queue to check in for Flight 666";//meddelande när det står folk i kö
infoText.innerText = emptyQueue;//i början är kön tom

//FUNKTION KOLLA INPUTFÄLTET
function inputOk(){
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

//ADD BUTTON
addButton.addEventListener("click", ()=>{
    console.log("Användaren klickade på 'Add'");
    infoText.innerText = fullQueue;//när vi klickar på add byts texten i h2
    if(inputOk()){//Anropar funktionen inputOk 
        myQueue.push(userInput.value.toLowerCase()); //Push för att lägga till personen längst bak i arrayen
        let listItem = document.createElement("li"); //skapa list-item
        listItem.innerText = userInput.value; //ge listItem värdet av användarens inmatning
        queueList.appendChild(listItem);//lägg till listItem i ol-listan
        console.log(myQueue)//skriver ut arrayen i konsolen
        userInput.value = "";//rensar input-fältet
    }
});

//FAST TRACK BUTTON
fastTrackButton.addEventListener("click", ()=>{
    console.log("Användaren klickade på 'Fast track'");
    if(inputOk()){
        myQueue.unshift(userInput.value.toLowerCase()); //Unshift för att lägga till personen längst fram i arrayen
        let listItem = document.createElement("li"); //skapa list-item
        listItem.innerText = userInput.value; //ge listItem värdet av användarens inmatning
        queueList.prepend(listItem);//lägger listItem först i ol-listan
        console.log(myQueue);//skriver ut arrayen i konsolen
        userInput.value = "";
    }
})

//CHECK IN BUTTON
checkInButton.addEventListener("click", ()=>{
    console.log("Användaren klickade på 'Check in'");
     if(myQueue.length === 0){//OM arrayen är tom, alert
        infoText.innerText = emptyQueue;
        alert("There's no one to check in!")
    }else{ //ANNARS, gör följande:
        let firstPersonInQueue = queueList.firstElementChild;//skapa en variabel för det första childet av ol-elementet, dvs li
        console.log(firstPersonInQueue);//skriver ut i konsolen för att se om det funkar
        let removeFirstFromQueue = myQueue.shift();//skapa variabel för att hantera det borttagna värdet från shift()
        console.log(removeFirstFromQueue);//loggar för att se värdet vi tagit bort
        queueList.removeChild(firstPersonInQueue);//ta bort det första li-elementet 
        console.log(myQueue);//loggar kön för att se att den minskar
    }
 });
