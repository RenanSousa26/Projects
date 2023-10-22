const menuItem = document.querySelectorAll('.nav-a');
const navPlanet = document.querySelectorAll('.nav-a-planet');

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('active-border-line')
    )
    this.classList.add('active-border-line')
}

function selectLinkPlanet(){
    navPlanet.forEach((item) => 
        item.classList.remove('active-border-line')
    )
    this.classList.add('active-border-line')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)

navPlanet.forEach((item) => 
    item.addEventListener('click', selectLinkPlanet)
)

        const mobileMenus = document.querySelector('.mobile-menu');
        const nav = document.querySelector('nav');
        const a = document.querySelectorAll('a');
        const line1 = document.querySelector('#line1');
        const line2 = document.querySelector('#line2');
        const line3 = document.querySelector('#line3');
        const body = document.querySelector('body');
        

        mobileMenus.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenus.classList.toggle('rotate');
            line1.classList.toggle('ex1');
            line2.classList.toggle('ex2');
            line3.classList.toggle('ex3');
            body.classList.toggle('hidden');

            a.forEach((item) => 
            item.classList.toggle('active-li')
            )
        });

        const moon = document.querySelector('#moon');
        const mars = document.querySelector('#mars');
        const europa = document.querySelector('#europa');
        const titan = document.querySelector('#titan');
        const imgPlanet = document.querySelector('#img-planet');
        const paragraph = document.querySelector('.paragraph');
        const titleH1 = document.querySelector('#title-h1');
        const distance = document.querySelector('#distance');
        const days = document.querySelector('#days');

        var imgMars = "../img/assets/destination/image-mars.webp";
        var imgMoon = "../img/assets/destination/image-moon.webp";
        var imgEuropa = "../img/assets/destination/image-europa.webp";
        var imgTitan = "../img/assets/destination/image-titan.webp";

        var moonText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        var marsText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
        var europaText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        var titanText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";


        function toggleImg(img, text, title, distan, day){
            imgPlanet.src = img;
            paragraph.innerText = text;
            titleH1.innerText = title;
            distance.innerText = distan;
            days.innerText = day;

        }

        moon.addEventListener('click', () =>{
            toggleImg(imgMoon, moonText, 'MOON', '384,400 KM', '3 DAYS');
        })

       mars.addEventListener('click', () =>{
            toggleImg(imgMars, marsText, 'MARS', '225 MIL. KM', '9 MONTHS');
        })

        europa.addEventListener('click', () =>{
            toggleImg(imgEuropa, europaText, 'EUROPA', '628 MIL. KM', '3 YEARS');
        })

        titan.addEventListener('click', () =>{
            toggleImg(imgTitan, titanText, 'TITAN', '1.6 BIL. KM', '7 YEARS');
        })


        