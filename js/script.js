let count = new Date('jan 1, 2023 00:00:00').getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let d = count - now;

    let days = Math.floor(d/(1000*60*60*24));
    let hours = Math.floor((d%(1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((d%(1000*60*60)) / (1000*60));
    let seconds = Math.floor((d%(1000*60)) / 1000);
    
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
})