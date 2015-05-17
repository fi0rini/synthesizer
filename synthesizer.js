module.exports = {
  synthesize : function(name, value) {
    var that = this;
    that[name] = {
      Get : function() {
        return value;
      },
      Set : function(val) {
        value = val;
      }
    };
    return this;
  }
}
