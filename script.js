

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


/* Check if it is a leap year */

function checkLeapYear(){
    let year = document.getElementById('yearValue').value
    let outputYear = document.getElementById('outputYear')

    if(year % 4 ===0 && !year % 100 === 0 || year % 400 === 0){ 
        outputYear.textContent = `${year} is a Leap year`
    } else {
        outputYear.textContent = `${year} is not a Leap year`
    }
}

let btnCheckLeapYear = document.getElementById('buttonClickYear')
btnCheckLeapYear.addEventListener("click", checkLeapYear);


/* find which 1st January is being a Sunday between 2014 and 2050. */

let findSunday=()=>{

    for(let year = 2014; year <=2050;year++){
        let date = new Date(year,0,1)
        
        if(date.getDay() ===1){
            console.log(`${year}'s 1st January is Sunday  `);
        }
    }
}

findSunday()

/* Guess number  between 1 to 10 */
function guessNumber(){
    let randomNumber =  Math.floor(Math.random()*(10+1))

    let guess = document.getElementById('guessValue').value
    let guessResult = document.getElementById('guessAnswer')
    if(guess == randomNumber){
        guessResult.textContent = 'Correct Guess '
    }  else {
        guessResult.textContent = 'Better Luck next time'
    }
}

let guessClick = document.getElementById('guessClick')
guessClick.addEventListener('click',guessNumber)

/*  calculate days left until next Christmas */

function daysToChristmas(){
let today = new Date()
let christmasDate = new Date(today.getFullYear(), 11,25)

// 1000 miliseconds in a second*60 sec*60 minutes*24 hours
let oneDay = 1000*60*60*24

if(today.getMonth ==11 && today.getDate >25){
    christmasDate.setFullYear(today.getFullYear()+1)
}

let daysToChristmas = Math.ceil(
  (christmasDate.getTime() - today.getTime()) / oneDay
);

console.log(daysToChristmas);
}

// daysToChristmas()


/* celsius to Farenheit Formula : c/5 = (f-32)/9 

*/

function farenheitToCelcius(temp){
    let farenheitTemp = temp;

    let celciusTemp = (farenheitTemp -32)*(5/9)

    console.log(`${celciusTemp} degree Celcius`);

}

farenheitToCelcius(140)

function celciusToFarenheit(temp) {
  let celciusTemp = temp;

  let farenheitTemp = celciusTemp *(9/5) +32

  console.log(`${farenheitTemp} degree Farenheit`);
}
celciusToFarenheit(60)


/* Get the website URL (loading page) */

function getUrl(){
    alert(document.URL)
}

getUrl()