

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

// getUrl()

//diff between given number

function diffBetween13(number){
    let diff = number - 13

    console.log(diff);
    if(number > 13){
        console.log(diff * 2);
    }

}

// diffBetween13(20)

/* Compute the sum of the two given integers */
function sumTriple(x,y){
    if(x==y){
        return 3* (x+y)
    } else{
        return x + y
    }
}

// console.log(sumTriple(2,3));
// console.log(sumTriple(2,2));

/* check whether a given positive number is a multiple of 3 or a multiple of 7 */
function checkNumber(number){
    if(number%3==0){
        return `${number} is divisble of 3`
    } else if(number%7==0){
        return`${number} is divisible of 7`
    } else {
        return 'yet to divide'
    }
}

// console.log(checkNumber(21))

/* create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. */

function addFrontBack(text){
    let backText;
    let newText;
    if(text.length >=3){
        backText = text.substring(3)
        newText = backText + text + backText
        }

    console.log(newText);  
}
// addFrontBack('string');

// nearest to 100 from two different given integer values
    function nearestTo100(num1,num2){
        let num1Diff = 100 - num1
        let num2Diff = 100 -num2

        if(num2Diff > num1Diff){
            return `${num1} is closest to 100`
        } else {
            return `${num2} is closest to 100`;
        }
    }

    // console.log(nearestTo100(50,60));
    // console.log(nearestTo100(22,34));
    // console.log(nearestTo100(22,-1034));



/*  Replace every character in a given string with the character following it in the alphabet */
// function string_reverse(str)
function LetterChanges(text){
    let s = text.split('')
    
    for(let i =0; i<s.length; i++){
        //ceasar cipher
        switch(s[i]){
            case ' ':
                break;
            case 'z':
                s[i]='a'
                break
            case 'Z':
                s[i] = 'A';
                break;
            default:
                // s[i]= String.fromCharCode(1 + s[i].charCodeAt(0))
                s[i]= console.log(String.fromCharCode(1 + s[i].charCodeAt(0)));
        }

        //Upper-case vowels
            switch(s[i]){
                case 'a': case'e' : case 'i': case 'o': case 'u':
                    s[i] = s[i].toUpperCase()
            }
    }
        return s.join('');
}

// console.log(LetterChanges('thdc12'));

/* Add two positive integers without carry */

function add_two_int_without_carrying(n1,n2){
    let result=0;
    let multiplier =1

    while (n1|| n2){
        let bit_sum = (n1%10 + n2%10) % 10

        result = multiplier * bit_sum + result;

        // n1 = Math.floor(n1/10)
        // n2 = Math.floor(n2/10)
        n1 = parseInt(n1/10)
        n2 = parseInt(n2/10)

        multiplier*=10;
    }
    return result

}

console.log(add_two_int_without_carrying(456,854));
console.log(add_two_int_without_carrying(2,12));

function xSum(n,m){
let result =0

let multiplier = 1

while(n||m){
let bit_sum = (n % 10) + (m % 10);

//to remove modulus of bit_sum
bit_sum %= 10;

result = bit_sum * multiplier + result;

n = parseInt(n / 10);
m = parseInt(m / 10);

multiplier *= 10
}
    return result
}

console.log(xSum(456 , 854 ));
console.log(xSum(2 , 12 ));