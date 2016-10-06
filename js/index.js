// function showMenu() {
//     var theTemplateScript = $("#menu-template").html();
//     var theTemplate = Handlebars.compile(theTemplateScript);
//
//     var context = {
//         btn: [
//             {category: "Planting Zone Changes"},
//             {category: "West Nile Migration"},
//             {category: "Species Migration"},
//             {category: "Polar Bears Habitat Change"}
//         ]
//     };
//
//     var compiledHTML = theTemplate(context);
//
//     $('#main-content').html(compiledHTML);
//
// }
//
// function showContent() {
//     var theTemplateScript = $("#content-template").html();
//     var theTemplate = Handlebars.compile(theTemplateScript);
//
//     var content = {
//         sections: [
//             {
//                 title: "Zika Virus",
//                 description: "Climate is just one factor that influences the spread of the Zika virus, as well as other diseases transmitted by mosquitos, like dengue and malaria. Other things that can lead to Zika, dengue and malaria spreading in new areas include XYZ. Many of these other influences are complex, and even if we understand them are hard to measure or predict. But with climate, we can measure and predict it in many places, so we can better understand how it may influence the spread of a disease in the past or the future. Scientists at IRI are studying how climate may have influenced the spread of Zika in the past in order to understand how it may continue to spread in the future. The main way that climate affects Zika is by influencing the optimal temperature and rainfall conditions for the mosquitos that transmit the virus. Because the mosquitos breed in still water, when heavy rains fall there can be more breeding habitats for the mosquitos, which can breed in a container as small as a bottle cap. On the other hand, in some areas"
//
//             }
//         ]
//     };
//
//     var compiledHTML = theTemplate(content);
//
//     $('#main-content').html(compiledHTML);
// }

function loadCategoryContent(category) {
    var content = $.getJSON("data/" + category + ".json", function(data) {
        if(data.sections) {
            for (var i=0; i < data.sections.length; i++) {
                var html = "<h1>" +  data.sections[i].title + "</h1>";
                    html += "<p>" + data.sections[i].description + "</p>";

                $('#main-content').append(html);
            }
        }

        if(data.graphics) {
            console.log(data.graphics);
            for (var j = 0; j < data.graphics.length; j++){
                var imgs = "<div class='img-container'><img src=" + data.graphics[j].link + "></div>";
                    imgs += "<p class='img-description'>" + data.graphics[j].description + "</p>";
                $('#main-content').append(imgs);
            }

        }

    });

}

function init() {
    $('#main-content').load('templates/test.html');
}

jQuery(document).ready(function($) {
    $('.category-btn').on('click', function() {
        $('#main-content').empty();

        var category = $(this).data('cat');

        loadCategoryContent(category);
    });
});
