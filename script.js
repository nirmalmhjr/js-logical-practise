
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
