var loopback = require('loopback');
var path = require('path');

module.exports = function(app) {
  var siteRoot = path.resolve(__dirname, '../../client/index.html');

  app.use(loopback.static(path.resolve(__dirname, '../../client')));

  app.use('*', function(req, res) {
    res.sendFile(siteRoot);
  });
};
