


var poundTriangle = function( limit ) {
  for( var i = 0; i < limit; i++) {
    var arr = Array(i+1).fill("#");
    var s = arr.join("");
    console.log(s);
  }
}

var fizzBuzz = function () {
  for( var i = 1; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0)
      console.log(i);
    if (i % 3 === 0 && i % 5 !== 0)
      console.log("Fizz");
    if (i % 3 !== 0 && i % 5 === 0)
      console.log("Buzz");
    if (i % 3 === 0 && i % 5 === 0)
      console.log("FizzBuzz");
  }
}

var chessBoard = function( limit) {
  for( var i = 0; i < limit; i++) {
    var s = ""
    for( var j= 0; j < limit; j++) {
      if( (i+j) % 2 === 0 )
        s += " ";
      else
        s += "#";
    }
    console.log(s);
  }
}

// poundTriangle(7);
// fizzBuzz();
chessBoard(8);