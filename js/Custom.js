const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const ditsy = document.getElementById('days'); 
//console.log(days,hour,minute,second);

// let monthName = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ];
///console.log(monthName);




const clock = setInterval(function time() {
    const time = document.querySelector("#time");
    //const day = document.querySelector("#days")
    let today = new Date();
    let d = today.getDate();
    let m = today.toLocaleString('default',{month: 'long'});
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //console.log(d,m,y);
    //let count = 3 
//console.log(monthName[count]);

let day_night = "AM"
if(h > 12) {
    //console.log(hour);
    day_night = "PM"
    h = h - 12;   
}
if(h < 10) {
    h = 0 + h;
}
if(min < 10) {
    min = 0 + min;
}
if(sec < 10) {
    sec = 0 + sec;
}
// if(min < 70){
//     day.innerHTML = `${d} ${m} ${y} `
//     day.style.fontSize = "40px";
// }
time.innerText =  day_night;
time.style.fontSize = "40px";    

     //ditsy.innerHTML = `${d} ${m} ${y} `
     ditsy.innerHTML = `${d} ${m} ${y} `
     //ditsy.innerHTML = today.toDateString();
     
     
    //console.log(ball);
    
    hour.textContent = h
    minute.innerText = min
    second.innerText = sec

    

})

