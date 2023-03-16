

// let date = new Date();

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

let days = ['Sunday','Monday','Tuesday','Wenesday','Thursday','Friday','Saturday']

// let today = days[date.getDay()]
// let second = date.getSeconds()
// let minute = date.getMinutes()
// let hour = date.getHours()
// hour = (hour >12)? hour -12 : hour

// console.log(hour);

let dateText = document.getElementById('date')
let activeDate = document.querySelector(".activeDate"); 

function currentDate () {
    let date = new Date();

    let today = days[date.getDay()];
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();

    // let para = document.createElement('p')
    // para.textContent = `Today is ${today}
    // Current Time : ${hour} : ${minute} :${second}`
    activeDate.textContent = `Today is ${today}
    ${date.toLocaleTimeString()}`
}

// currentDate()
// setInterval(currentDate(), 1000)
setInterval(()=>{
    currentDate()
},1000)

/* Print current Window */
function printCurrentWindow(){
    window.print()
}
/* Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
let activeDate_2 = document.querySelector(".activeDate2");

function differentFormatOutput(){
    let date = new Date()
    let year = date.getFullYear()
    let month =date.getMonth()
    let day = date.getDay()

    activeDate_2.textContent = `${month}-${day}-${year}, ${month}/${day}/${year}
    ${day}-${month}-${year} , ${day}/${month}/${year}`

}

differentFormatOutput()

/*  program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front */

// let stringValue  = document.getElementById('string').value
// console.log(stringValue);


function removeAdd(){
    let string = document.getElementById('stringValue').value
    let output = document.getElementById('output')
    
    let lastString = string[string.length-1]
    console.log(lastString);
    
    let updatedString = lastString + string.substring(0,string.length-1)
    
    console.log(updatedString);
    
    output.textContent = updatedString

} 

let btn = document.getElementById("buttonClick");
btn.addEventListener('click', removeAdd)