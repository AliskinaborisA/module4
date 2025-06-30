document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const expandMenu = document.querySelector('.expand-menu');

    if (menuIcon && expandMenu) {
        menuIcon.addEventListener('click', function() {
            expandMenu.classList.toggle('show');
            menuIcon.classList.toggle('active');
        });
    }
});
