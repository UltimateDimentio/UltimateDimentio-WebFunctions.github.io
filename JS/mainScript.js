let currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]')
currentLinks.forEach(link => link.className += ' current-link');


const year = new Date().getFullYear();
const month = new Date().getMonth();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


document.getElementById("footer").innerText = "© " + year + ", " + months[month] + ". Jesus ";