

var range = function( start, end, step ) {
  step = step || 1;
  var retArr = [];
  if (step === 0 ) return [ start ];
  if (step > 0) {
    for (var cursor = start; cursor <= end; cursor += step )
      retArr.push( cursor )
  } else {
    for (var cursor = start; cursor >= end; cursor += step )
      retArr.push( cursor )
  }
  
  return retArr;
};

var sum = function( arr ) {
  ret_val = 0
  for (i in arr){
    ret_val += arr[i];
  }
  return ret_val
};

var reverseArray = function(arr){
  ret_arr = [];
  for (var i = arr.length - 1; i >=0; i--){
    ret_arr.push( arr[i]);
  }
  return ret_arr;
};

var reverseArrayInPlace = function(arr){
  for( var i = 0; i < arr.length / 2; i++ ){
    var temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
}

var prepend = function( elt, list ){
  var ret_obj = {
    value: elt,
    rest: list
  };

  return ret_obj;
};

var nth = function(list, n) {
  if(n===0) return list.value;
  if(list.rest) return nth(list.rest, n-1);
  else return undefined;
};

var arrayToList = function(arr) {
  var ret_obj = {  };

  for (var i = arr.length - 1; i >=0; i--){
    ret_obj = prepend( arr[i], ret_obj )
    if (i === arr.length - 1) ret_obj.rest = null;
  }

  return ret_obj;
};

var deepEqual = function( obj1, obj2 ){
  if ( typeof(obj1) !== "object") return obj1 === obj2;
  if ( typeof(obj2) !== "object" ) { 
    return false;
  }
  if (obj1.length !== obj2.length) return false;

  for (var i in obj1) {
    if ( !deepEqual( obj1[i], obj2[i] ) ) return false;
  }
  return true;
}

// console.log(range(1, 10));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

// console.log(reverseArray(["A", "B", "C"]));
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// console.log(arrayToList([10, 20]));
// console.log(nth(arrayToList([10, 20, 30]), 1));
// console.log(nth(arrayToList([10, 20, 30]), 6));

// console.log( deepEqual(5, 5) );
// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, {here: 1, object: 2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
