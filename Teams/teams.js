function toggleNav() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const header__rightSide = document.querySelector('.header__rightSide');
    hamburgerIcon.classList.toggle('active');
    header__rightSide.classList.toggle('active');



    document.addEventListener('click', (event) => {
        if (event.target.closest('.nav-links') && event.target.closest('.hamburger-icon')) {
            header__rightSide.classList.remove('active');
        }
        
    });

}