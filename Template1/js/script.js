const navigation = document
    .getElementById('nav');

function toggleNav () {
    navigation
        .classList
        .toggle('show');
}

function closeNav () {
    navigation
        .classList
        .remove('show');
}

window.addEventListener('load', () => {
    const navItems = Array.from(document
        .querySelectorAll('.nav__item a'));

    navItems.forEach(function (i) {
        i.addEventListener('click', closeNav);
    });

    document
        .getElementById('navOpen')
        .addEventListener('click', toggleNav);

    document
        .getElementById('navClose')
        .addEventListener('click', toggleNav);
});