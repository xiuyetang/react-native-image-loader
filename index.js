module.exports = function() {
  var path = this.resourcePath;

  var pieces = path.split('/');
  var filePieces = pieces[pieces.length - 1].split('.');
  var name = filePieces[0];

  return "require('image!" + name + "')";
};