const links = document.querySelectorAll('a');
const li = document.getElementsByTagName('li');
const menuItem = document.querySelectorAll('.menu-item');

function selectLink(){
    menuItem.forEach((item) => 
        item.classList.remove('active')
    )
    this.classList.add('active')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)
