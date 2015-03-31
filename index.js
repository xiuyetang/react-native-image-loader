module.exports = function() {
  var path = this.resourcePath;
  return "require('image!" + path + "')";
};