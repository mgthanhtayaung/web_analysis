'use strict';

$(function() {
    $('#output').append('<img src="" alt="" id="product">')

    $('.name').on('click', function() {
        const img = $(this).attr('src');
        const $item = $(this).closest('.items');
        const perfumeName = $item.find('.item-name').text();
        const detail = $item.find('.perfume-detail').html();

        $('#cart').css('display', 'block');
        $('#pro-img').attr({
            src: img,
            alt: `${perfumeName} のおすすめ香水`
        });
        $('.point').html(`<strong>${perfumeName}</strong><br>${detail}`);

    });
    $('#cart').on('click', function() {
        $('#cart').css('display', 'none');
    });
    // Add click event listener to each item
    $('.item-name').on('click', function() {
        // Get the item name from the clicked item
        $(this).next().toggleClass('hidden');

        // Do something with the item name, e.g., display it or perform an action
        console.log('Item clicked:', $(this).text());
    });


    $('#open_nav').on('click', function() {
        $('#top,#nav').toggleClass('show');
    });

    const $up = $('.up');

    function toggleUpButton() {
        const hasScrollablePage = document.documentElement.scrollHeight > window.innerHeight;
        const isVisible = !hasScrollablePage || $(window).scrollTop() > 100;

        $up.toggleClass('is-visible', isVisible).attr('aria-hidden', !isVisible);
    }

    $(window).on('scroll', toggleUpButton);
    toggleUpButton();

    $up.on('click', 'a', function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        history.replaceState(null, '', window.location.pathname + window.location.search);
    });


    $('#text-title').on('submit', function(e) {
        e.preventDefault();
        let search = $('#mySearch').val();
        console.log(search);
        $('#product').attr('src', `images/${search}.jpg`)
            // $('#output').append(`<img src="images/${search}.jpg">`);
    });

});