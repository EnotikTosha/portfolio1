$(function () {

    window.onscroll = function showHeader() {
        var header = document.querySelector('.header');

        if (window.pageYOffset > 200) {
            header.classList.add('header_fixed');
        }
    }

    $('.header_btn-menu').on('click', function () {
        $('.header_menu ul').slideToggle();
    });





});