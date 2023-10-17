const links = document.querySelectorAll('a');
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

//serve para rolar o scroll para o topo da página:
window.addEventListener("resize", function() {
    if (window.innerWidth >= 992) {
      window.scrollTo(0, 0);
    }
});


        const mobileMenus = document.querySelector('.mobile-menu');
        const ul = document.querySelector('ul');
        const li = document.querySelectorAll('li');
        const line1 = document.querySelector('#line1');
        const line2 = document.querySelector('#line2');
        const line3 = document.querySelector('#line3');
        
        

        mobileMenus.addEventListener('click', () => {
            ul.classList.toggle('active-nav');
            mobileMenus.classList.toggle('rotate');
            line1.classList.toggle('ex1');
            line2.classList.toggle('ex2');
            line3.classList.toggle('ex3');

            li.forEach((item) => 
            item.classList.toggle('active-li')
            )
        });
        


