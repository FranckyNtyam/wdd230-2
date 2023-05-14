const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

let day = new Date(document.lastModified);
let year = day.getFullYear();
let time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
let date = day.getMonth() +1  + "/" + day.getDate() +"/" + day.getFullYear();
document.querySelector('#year').innerHTML = year;
document.querySelector('#last-modified').innerHTML = date + " " + time;