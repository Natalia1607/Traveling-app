/*=========Navigation========= */
const navLink = document.querySelectorAll('.nav-link');
const navItem = document.querySelectorAll('.mark');

for (let link = 0; link < navLink.length; link++) {
	navLink[link].addEventListener('click', ( event ) => {
    for (let item = 0; item < navItem.length; item++) {
      if (link == item) {
        navItem[item].classList.add('mark_active');
      }
      else 
        navItem[item].classList.remove('mark_active');
    }
  }
)};


/*=========Location========= */
const geo = 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY&ip=1.1.1.1&lang=en'
window.onload = function () {
const o = ymaps.geolocation;
  document.getElementById("geo").innerHTML = o.city;
};
  

/*=========Change theme========= */
const btnDark = document.getElementById('dark-theme');
const btnLight = document.getElementById('light-theme');
const btnWarm = document.getElementById('warm-theme');

btnDark.addEventListener('click', () => {
  document.body.className = '';
  document.body.classList.add('dark-theme');
});

btnLight.addEventListener('click', () => {
  document.body.className = '';
  document.body.classList.add('light-theme');
});

btnWarm.addEventListener('click', () => {
  document.body.className = '';
  document.body.classList.add('warm-theme');
});




/* 
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  console.log('Кнопка нажата!');
  page.classList.remove('light-theme');
  page.classList.add('dark-theme');
};
 */

/* let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  
};
 */


