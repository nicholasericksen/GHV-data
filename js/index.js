function init() {
    renderTemplate('menu', 'menu/main-menu');
}

jQuery(document).ready(function() {
    $('.logo').on('click', function() {
        init();
    });
    $('#back-button-container').on('click', function() {
    	init();
    	$('#back-button-container').hide();
    });
    $('#main-content').on('click', '.main-menu ul', function() {
        $('.logo').addClass('small-logo');
        $('#back-button-container').show();
    });
		$('#back-button-container').hide();

});
