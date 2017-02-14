


var poundTriangle = function( limit ) {
  for( var i = 0; i < limit; i++) {
    var arr = Array(i+1).fill("#");
    var s = arr.join("");
    console.log(s);
  }
}

poundTriangle(7);
