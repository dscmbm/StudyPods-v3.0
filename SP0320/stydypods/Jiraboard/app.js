let addBtn = document.querySelector(".add-btn");
let rmvBtn = document.querySelector(".rmv-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");


let toolBoxColors = document.querySelectorAll(".color");

// about page js
const a_text = document.querySelector(".second_text");

const textLoading = ()=>{

  
  setTimeout(()=>{
    a_text.textContent="I'm JITENDRA";
  },0);

  setTimeout(()=>{
    a_text.textContent="I'm HEENA";
  },8000);

  setTimeout(()=>{
    a_text.textContent="I'm MONTU";
  },16000);

  setTimeout(()=>{
    a_text.textContent="I'm AJAY";
  },24000); 
}

textLoading();
setInterval(textLoading,32000);

// about page js end

let colors = ["red", "blue", "green", "black"];
let modalPriorityColor = colors[colors.length - 1];

let addFlag = false;
let rmvFlag = true;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";


let ticketsArr = [];


if (localStorage.getItem("jira_tickets")) {
  // retrive and display ticket 
  ticketsArr = JSON.parse(localStorage.getItem("jira_tickets"));
  ticketsArr.forEach((ticketObj) => {
    createTicket(ticketObj.ticketColor,ticketObj.ticketTask,ticketObj.ticketID)
  })
}


//COLOR CHANGE FROMM TOOLBOX 
for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", (e) => {
    let currentToolBoxColor = toolBoxColors[i].classList[0];

    let filteredTickets = ticketsArr.filter((ticketObj, idx) => {
      return currentToolBoxColor === ticketObj.ticketColor;
    })

    // remove previous tickets 
    let allTicketCont = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicketCont.length; i++) {
      allTicketCont[i].remove();
      
    }

    // DISPLAY NEW FILTERED TICKET 
    filteredTickets.forEach((ticketObj, idx) => {
      createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketID); 
    })

  })
  
  
  toolBoxColors[i].addEventListener("dblclick", (e) => {
    let allTicketCont = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicketCont.length; i++) {
      allTicketCont[i].remove();
      
    }

    ticketsArr.forEach((ticketObj, idx) => {
      createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketID); 
    })
  })
  
}


// // LISTENER FOR MODEL PRIORITY COLORING
allPriorityColors.forEach((colorElem, idx) => {
  colorElem.addEventListener("click", (e) => {
    allPriorityColors.forEach((priorityColorElem, idx) => {
      priorityColorElem.classList.remove("border");
    });
    colorElem.classList.add("border");

    modalPriorityColor = colorElem.classList[0];
  });
});

// FOR ADD BUTTON
addBtn.addEventListener("click", (e) => {
  // DISPLAY MODUL
  // GENERATE TICKET

  // ADDING.TRUE -->MODUL DISPLAY
  // ADDING.FALSE -->MODUL NONE
  addFlag = !addFlag;
  if (addFlag) {
    modalCont.style.display = "flex";
    // mainCont.style.background = 'red';
    mainCont.style.opacity ='0.2';
  } else {
    modalCont.style.display = "none";
    // mainCont.style.background = 'yellow';
    mainCont.style.opacity ='1';
  }
});

  // FOR REMOVE BUTTON 
rmvBtn.addEventListener("click", (e) => {
    rmvFlag = !rmvFlag;
    if(rmvFlag===false){
      rmvBtn.style.border = "1px solid";
      rmvBtn.style.borderStyle="outset";
    }
    else{
      rmvBtn.style.border = "0px";
    }
   
        
});


// TICKET GENETATE 
modalCont.addEventListener("keydown", (e) => {
  let myKey = e.key;
  if (myKey === "Shift") {
    mainCont.style.opacity ='1';
    createTicket(modalPriorityColor, textAreaCont.value);
    setModalToDefault()
    addFlag = false;
    // textAreaCont.innerText = "";//textarea specail atribute value so
  }
});

// CREATING TICKET
function createTicket(ticketColor, ticketTask, ticketID) {
  let id = ticketID || " ";
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">${id}</div>
    <div class="task-area">${ticketTask} </div>
    <div class="ticket-lock">
    <i class="fa-solid fa-lock"></i>
    </div
    `;
  mainCont.appendChild(ticketCont);

  //create object of ticket and add to array
  if (!ticketID) {
    ticketsArr.push({ ticketColor, ticketTask, ticketID: id })
    localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
  }

  handleRemoval(ticketCont,id);
  handleLock(ticketCont,id);
  handleColor(ticketCont,id);
}

function handleRemoval(ticket,id) {
  //REMOVE ->TRUE ->REMOVE
  ticket.addEventListener("dblclick", (e) => {
    if (rmvFlag) return;
    
    let idx = getTicketIdx(id);
    ticketsArr.splice(idx, 1);
    let strTicketsArr = JSON.stringify(ticketsArr);
    localStorage.setItem("jira_tickets", strTicketsArr);
    ticket.remove();
    
  })
}

// FOR LOCK / UNLOCK
function handleLock(ticket,id) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLock = ticketLockElem.children[0]; //ek hi children h
  let ticketTaskArea = ticket.querySelector(".task-area");
  ticketLock.addEventListener("click", (e) => {
    let ticketIdx = getTicketIdx(id);

    if (ticketLock.classList.contains(lockClass)) {
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLock.classList.remove(unlockClass);
      ticketLock.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    } 

    // MODIFY DATA IN LOCALSTORAGE(TICKET TASK); 
    ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
    localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));


  });
} 


// CURRETN  TICKET COLOR CHANGE
function handleColor(ticket,id){
  let ticketColor = ticket.querySelector(".ticket-color");
  ticketColor.addEventListener("click", (e) => {
    //get ticketIdx from the tickets array
    let ticketIdx = getTicketIdx(id);

    let currentTicketColor = ticketColor.classList[1];
    // GET TICKET COLOR INDEX
    let currentTicketColorIdx = colors.findIndex((color) => {
      return currentTicketColor === color;
    })
    console.log(currentTicketColor,currentTicketColorIdx);
    currentTicketColorIdx++;
    let newTicketColorIdx = currentTicketColorIdx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];
    ticketColor.classList.remove(currentTicketColor);
    ticketColor.classList.add(newTicketColor);


    //Modify data in localStorage
    ticketArr[ticketIdx].ticketColor = newTicketColor;
    localStorage.setItem("jira_tickets", JSON.stringify(ticketArr));
  });

}


function getTicketIdx(id) {
  let ticketIdx = ticketsArr.findIndex((ticketObj) => {
    return ticketObj.ticketID === id;
  })
  return ticketIdx;
}


function setModalToDefault() {
  modalCont.style.display = "none";
  textAreaCont.value = "";
  modalPriorityColor = colors[colors.length - 1];
  allPriorityColors.forEach((priorityColorElem , idx)  => {
    priorityColorElem.classList.remove("border"); 
  })
  allPriorityColors[allPriorityColors.length - 1].classList.add("border");
}


// about page js
