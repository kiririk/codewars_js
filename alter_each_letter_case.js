//https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/train/javascript
String.prototype.toAlternatingCase = function () {
  return this.toString().split('')
                        .map(l => l.match(/[a-z]/)  ? l.toUpperCase() : l.toLowerCase())
                        .join('');
}
//without toString possible
