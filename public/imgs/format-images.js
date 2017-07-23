var fs = require('fs'),
    path = require('path'),
    args = process.argv.slice(2),
    dir = args[0],
    match = RegExp('/ /', 'g'),
    replace = '-',
    files;

files = fs.readdirSync(dir);

var tmparr = [];

files.forEach(function(file) {
    console.log(file.replace(/\s/g, '-'));
    var newFile = file.replace(/\s/g, '-');

    fs.renameSync(dir + '/' + file, dir + '/' + newFile);

    tmparr.push(newFile);
})

var tmpObj = [{
    slider: {
        baseUrl: '/public/imgs/' + dir,
        imgs: tmparr
    }
}
];

console.log(tmpObj[0]);
