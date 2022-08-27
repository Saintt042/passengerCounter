let saveEl = document.getElementById("save-el")
let countdown = document.getElementById("countDown") //.innerText = 5;
let dateRe = document.getElementById("demo")
let countDown = 0;

 console.log(saveEl);

function increment() {
   countDown += 1
   //simply means countDown = countDown + 1
   countdown.textContent = countDown;
   
}
increment()


function save() {
    const d = new Date();
    dateRe.innerHTML = d;
    let countStr = countDown + " - " + d
    //always use .textContent to align properly
    saveEl.textContent += countStr
    countdown.textContent = 0;
    // after save sets back to 0
    countDown = 0;
    alert("Proceed to save?");
    
}
save()