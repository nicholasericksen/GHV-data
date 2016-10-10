function init() {
    renderTemplate('menu', 'menu/main-menu');
}

jQuery(document).ready(function() {
    $('.logo').on('click', function() {
        init();
    });

    $('#main-content').on('click', '.main-menu ul', function() {
        $('.logo').addClass('small-logo');
    });
});
