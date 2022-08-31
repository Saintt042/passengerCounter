const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let saveEl = document.getElementById("save-el");
let dateRe = document.getElementById("demo");
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(whichBtn){
        const styles = whichBtn.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        } else if(styles.contains("reset")){
            count = 0;
        }

        if(count < 0){
            document.getElementById("value").style.color = "red";
        } else if(count > 0){
            document.getElementById("value").style.color = "green";
        } else{
            document.getElementById("value").style.color = "lightblue";
        }

        value.textContent = count;
    });    
});


function save() {
    const d = new Date();
    dateRe.innerHTML = d;
    let countStr = count + " - " + d
    saveEl.textContent += countStr
    value.textContent = 0;
    // after save sets back to 0
    value = 0;    
}
save()
