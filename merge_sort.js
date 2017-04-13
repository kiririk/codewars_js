function mergesorted(a, b) {
  var con = a.concat(b);
  for (var i = 1; i < con.length; ) {
    if (con[i-1] > con[i]) {
    var buff = con[i-1];
    con[i-1] = con[i];
    con[i] = buff;
    i = 1;
    } else i++;
  }
  return con;
}

// function mergesorted(a, b) {
//   var r = [];
//   while(a.length && b.length){
//     if(a[0] < b[0]) r.push(a.shift());
//     else r.push(b.shift());
//   }
//   return r.concat(a).concat(b);
// }

// function mergesorted(a, b) {
//   let res = [];
//   while (1) {
//     if (!a.length || !b.length) {
//       return res.concat(a.length && a || b);
//     }
//     res.push((a[0] < b[0] ? a : b).shift());
//   }
// }