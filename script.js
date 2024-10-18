let clock=setInterval(() => {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "Agust", "September", "Octuber", "November", "December"]
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"]
    let d = new Date();

    
hr=d.getHours();
min=d.getMinutes();
sec=d.getSeconds();
console.log(hr,min,sec);
hourotation=hr*30+min/2;
minrotation=6*min;
secrotaion=6*sec;
let hours= document.getElementById('hour');
let minutes= document.getElementById('min');
let seconds= document.getElementById('sec');
hours.style.transform=`rotate(${hourotation}deg)`
minutes.style.transform=`rotate(${minrotation}deg)`
seconds.style.transform=`rotate(${secrotaion}deg)`
}, 1000);

// code for date----------------------------------------------------->


// Get the current date
const today = new Date();

// Format day, and date separately
const optionsDay = { weekday: 'long' };
const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
const day = today.toLocaleDateString('en-GB', optionsDay);
const date = today.toLocaleDateString('en-GB', optionsDate);

// Display the current day and date with a line break
document.getElementById("date").innerHTML = `${day}<br>${date}`;