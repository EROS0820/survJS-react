var path = require('path');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  }
};

if(TARGET === 'build') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?stage=1'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    }
  });
}

if(TARGET === 'dev') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel?stage=1'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    }
  });
}
