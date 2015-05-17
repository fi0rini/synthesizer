module.exports = {
  synthesize : function(name, value, fn1, fn2) {
    
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