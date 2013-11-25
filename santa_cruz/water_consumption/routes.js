module.exports = function(app){
    // Root path
    var root = require('./controllers/root');
    var data = require('./controllers/data');

    // Logged in - display default dashboard page
    app.get('/', root.root);
    app.get('/overall', data.overall);
    app.get('/consumers', data.consumers);
};