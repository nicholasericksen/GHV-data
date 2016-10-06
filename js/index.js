$(function() {
    var theTemplateScript = $("#menu-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);

    var context = {
        btn: [
            {category: "Planting Zone Changes"},
            {category: "West Nile Migration"},
            {category: "Species Migration"},
            {category: "Polar Bears Habitat Change"}
        ]
    };

    var compiledHTML = theTemplate(context);

    $('#main-content').html(compiledHTML);

});
