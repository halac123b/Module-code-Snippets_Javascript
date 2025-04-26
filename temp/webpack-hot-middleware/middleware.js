module.exports = webpackHotMiddleware;

var helpers = require('./helpers');
var pathMatch = helpers.pathMatch;

function webpackHotMiddleware(compiler, opts) {
    opts = opts || {};
    opts.log =
        typeof opts.log == 'undefined' ? console.log.bind(console) : opts.log;

    opts.path = opts.path || '/__webpack_hmr';
    opts.heartbeat = opts.heartbeat || 10 * 1000;
}