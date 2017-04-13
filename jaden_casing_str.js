String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase()+el.slice(1)).join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

//return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
