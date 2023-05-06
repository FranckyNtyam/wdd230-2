let day = new Date(document.lastModified);
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = (day.getMonth() + 1) + "/" + day.getDate() + "/" + day.getFullYear();
document.getElementById('year').innerHTML = year;
document.getElementById('current-date').innerHTML = date + " " + time;