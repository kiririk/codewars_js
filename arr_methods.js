Array.prototype.int = function (){
  return this.filter(function (x) { return typeof x == 'number' && x == ~~x });
}
Array.prototype.even = function(){
  return this.int().filter(function (x) { return ~x & 1 });
}

Array.prototype.odd = function(){
  return this.int().filter(function (x) { return x & 1 });
}

Array.prototype.under = function(x){
  return this.int().filter(function (y) { return y < x });
}

Array.prototype.over = function(x){
  return this.int().filter(function (y) { return y > x });
}

Array.prototype.inRange = function(min,max){
  return this.int().filter(function (x) { return x >= min && x <= max });
}
