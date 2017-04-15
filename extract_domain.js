//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
const domainName = (url) => url.replace(/((http(s?):\/\/?)|(www\.))/ig,'').split('.')[0];

//return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
