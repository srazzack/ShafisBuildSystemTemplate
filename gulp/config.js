var path = require('path');
var production = (process.env.NODE_ENV === 'production');

module.exports = {
    bower: 'app/bower_components',
    dist: production ? 'dist' : '.tmp',
    proxy: 'localhost/split',
    livereloadPort: 35729,
    port: 9001,
    root: path.resolve('./')
};

