module.exports = function() {
  var path = this.context;
  return "require('image!" + path + "')";
};