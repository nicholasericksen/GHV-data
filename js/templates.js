!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.menu=n({1:function(n,a,l,e,i){var t,s=null!=a?a:{},c=l.helperMissing,r="function",u=n.escapeExpression;return"            <li onclick=\"renderTemplate('submenu', '"+u((t=null!=(t=l.submenu||(null!=a?a.submenu:a))?t:c,typeof t===r?t.call(s,{name:"submenu",hash:{},data:i}):t))+'\')" class="category-btn">\n                <div class="menu-text">'+u((t=null!=(t=l.title||(null!=a?a.title:a))?t:c,typeof t===r?t.call(s,{name:"title",hash:{},data:i}):t))+"</div>\n            </li>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,i){var t;return'<div class="main-menu menu-container">\n    <ul>\n'+(null!=(t=l.each.call(null!=a?a:{},null!=a?a.buttons:a,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?t:"")+"    </ul>\n</div>\n"},useData:!0}),a.page=n({1:function(n,a,l,e,i){var t,s=null!=a?a:{},c=l.helperMissing,r="function",u=n.escapeExpression;return"<h1>"+u((t=null!=(t=l.title||(null!=a?a.title:a))?t:c,typeof t===r?t.call(s,{name:"title",hash:{},data:i}):t))+"</h1>\n<p>\n    "+u((t=null!=(t=l.description||(null!=a?a.description:a))?t:c,typeof t===r?t.call(s,{name:"description",hash:{},data:i}):t))+"\n</p>\n"},3:function(n,a,l,e,i){var t,s=null!=a?a:{},c=l.helperMissing,r="function",u=n.escapeExpression;return"<div class='img-container'>\n    <div class=\"close-graphic-btn\">X</div>\n    <img src="+u((t=null!=(t=l.link||(null!=a?a.link:a))?t:c,typeof t===r?t.call(s,{name:"link",hash:{},data:i}):t))+" />\n    <p class='img-description'>\n        "+u((t=null!=(t=l.description||(null!=a?a.description:a))?t:c,typeof t===r?t.call(s,{name:"description",hash:{},data:i}):t))+"\n    </p>\n</div>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,i){var t,s,c=null!=a?a:{};return'<div id="side-rail">\n    <div id="menu-btn-container">\n        <ul class="page-menu-list">\n            <li onclick="renderTemplate(\'submenu\', \''+n.escapeExpression((s=null!=(s=l.category||(null!=a?a.category:a))?s:l.helperMissing,"function"==typeof s?s.call(c,{name:"category",hash:{},data:i}):s))+'\')">Menu</li>\n            <li class="graph-btn">Graphs</li>\n        </ul>\n    </div>\n</div>\n\n'+(null!=(t=l.each.call(c,null!=a?a.sections:a,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?t:"")+"\n"+(null!=(t=l.each.call(c,null!=a?a.graphics:a,{name:"each",hash:{},fn:n.program(3,i,0),inverse:n.noop,data:i}))?t:"")+"\n<script>\n$('.graph-btn').on('click', function() {\n    $('.img-container').css('display', 'block');\n});\n\n$('.close-graphic-btn').on('click', function() {\n    $('.img-container').css('display', 'none');\n});\n\n$('#main-content').css({\"margin-top\": \"500px\", \"opacity\": \"0\"});\n$('#main-content').animate({\"margin-top\": '0', \"opacity\": \"1\"}, 500);\n</script>\n"},useData:!0}),a.submenu=n({1:function(n,a,l,e,i){var t,s=null!=a?a:{},c=l.helperMissing,r="function",u=n.escapeExpression;return"            <li onclick=\"renderTemplate('page', '"+u((t=null!=(t=l.datasrc||(null!=a?a.datasrc:a))?t:c,typeof t===r?t.call(s,{name:"datasrc",hash:{},data:i}):t))+'\')" class="category-btn">\n                <div class="menu-text">'+u((t=null!=(t=l.title||(null!=a?a.title:a))?t:c,typeof t===r?t.call(s,{name:"title",hash:{},data:i}):t))+"</div>\n            </li>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,l,e,i){var t;return'<div class="submenu menu-container">\n    <ul>\n'+(null!=(t=l.each.call(null!=a?a:{},null!=a?a.buttons:a,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?t:"")+"    </ul>\n</div>\n"},useData:!0})}();