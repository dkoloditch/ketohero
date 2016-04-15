var webpack = require('webpack');
var config = require('../../webpack.config');

module.exports = function(app, done) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */

  var compiler = webpack(config);

  if (process.env.NODE_ENV === 'production') {
    compiler.run(function(err, stats) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('webpacked for production');
      done();
    });
  } else {
    console.info('webpacking the front end...');
    var WebpackDevServer = require('webpack-dev-server');

    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true
    }).listen(4000, 'localhost', function (err, result) {
      if (err) {
        return console.log(err);
      }

      console.log('Listening at http://localhost:4000/');
    });
    done();
  }
};
