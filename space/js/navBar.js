const links = document.getElementsByTagName('a');
const li = document.getElementsByTagName('li');
const menuItem = document.querySelectorAll('.menu-item');


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
        li[i].classList.add('hover-list');
    });

    links[i].addEventListener("mouseout", () => {
        li[i].classList.remove('hover-list');
    });
}

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('active')
    )
    this.classList.add('active')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)
