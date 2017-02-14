

var min = function( a, b) {
  return ( a < b ? a : b )
}

var isEven = function (n) {
  if (n===0) return true;
  if (n===1) return false;

  return isEven(n-2);
}

var countChar = function( s, char ){
  var total = 0;
  for (c in s)
  {
    if (s[c] === char) total += 1;
   }
    return total;
}


var countBs = function( s ){
  return countChar(s, "B");
}

// console.log( min(5, 6));
// console.log( min(6, 2));
// console.log( isEven(19));
// console.log( isEven(36));

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));