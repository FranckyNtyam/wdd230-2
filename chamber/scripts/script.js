//Current time
let date1 = document.querySelector("#datetime");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
date1.innerHTML = fulldate;

//Hamburger Menu
function toggleMenu(){
    document.querySelector("#navigation").classList.toggle("open");
}

const x = document.getElementById("hamButton");
x.onclick = toggleMenu;


let day = new Date(document.lastModified);
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = day.getMonth() +1  + "/" + day.getDate() +"/" + day.getFullYear();
document.querySelector('#year').innerHTML = year;
document.querySelector('#last-modified').innerHTML = date + " " + time;