// 
let timeBlocksContainer = document.querySelector(".container");
const currentDate = document.querySelector("#currentDay");

let time = moment().format("h A");


setInterval(
    function () {
        let presentTime = moment();    

        currentDate.textContent = presentTime.format("Do MMMM YYYY HH:mm:ss");
    }, 1000);

function addNewEvent(rowId , rowTime , rowColor){
     let newRow =  `<div class="row" data-id="${rowId}">
     <div class="col-2 time-block hour">${rowTime}</div>
     <textarea placeholder="Add events here" class="col-8 time-slot ${rowColor} calendar-item" rows="2" cols="50"></textarea>
     <button class="col-2 saveBtn">Confirm</button>
   </div>`;
  timeBlocksContainer.innerHTML = timeBlocksContainer.innerHTML + newRow;  
  
};

for (let i = 9; i <= 17; i++) {
    const date = moment().set({ hour: i, minute: 0 }).format('h A');
    let color = "";

    if (time === date) {
        color = "present";        
    }else if(time > date){
        color = "future";
    }else if(time < date){
        color = "past";
    }

    addNewEvent(i, date ,color);   
};

let saveBtn = document.querySelector('.saveBtn');
function saveInput(event) {
    event.preventDefault();
    let eventInputEl = document.querySelector('.time-slot').value;
    localStorage.setItem('eventInputEl', eventInputEl);
    console.log(eventInputEl);
    document.getElementsByClassName('time-slot').innerHTML = localStorage.getItem('eventInputEl');
}

saveBtn.addEventListener('click', saveInput);

echo 'First line.
Second line.
Third line.' >foo.txt