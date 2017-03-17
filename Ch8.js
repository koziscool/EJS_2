
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

var reliableMultiply = function(a, b) {
  while (true) {  
    try {
      return primitiveMultiply( a, b )
    } catch (err){
      if (err instanceof MultiplicatorUnitFailure)
        console.log("multiply failed, try again");
      else
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

var withBoxUnlocked = function(body){
  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
};

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);

