const close = document.querySelector('.nav-close');
const navButton = document.querySelector('.nav-button');
const mobileMenu = document.querySelector('.mobile-nav')


navButton.addEventListener('click', function(){
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden')
    }
    console.log(mobileMenu.classList);

})

close.addEventListener('click', function(){
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden')
    }
    console.log(mobileMenu.classList);

})
