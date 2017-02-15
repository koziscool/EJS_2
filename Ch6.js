

var Vector = function(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function( vec ) {
  return new Vector( this.x + vec.x, this.y + vec.y );
};

Vector.prototype.minus = function( vec ) {
  return new Vector( this.x - vec.x, this.y - vec.y );
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
};

var TextCell = function(text) {
  this.text = text.split("\n");
};

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};


// console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// console.log(new Vector(3, 4).length);

// var sc = new StretchCell(new TextCell("abc"), 1, 2);
// console.log(sc.minWidth());
// console.log(sc.minHeight());
// console.log(sc.draw(3, 2));



