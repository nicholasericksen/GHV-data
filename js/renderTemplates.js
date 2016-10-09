function renderTemplate(template, data) {
    $.getJSON('./data/' + data + '.json', function(data) {
        var menuTemplate = Handlebars.templates[template];
        var menuContext = menuTemplate(data);

        $('#main-content').empty();
        $('#main-content').html(menuContext);
    });
}
