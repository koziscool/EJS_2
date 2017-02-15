
var flatten = function( arr ) {
  var ret_arr = []
  for ( index in arr ){
    if ( typeof arr[index] === "object" ) ret_arr = ret_arr.concat( flatten(arr[index]));
    else ret_arr.push( arr[index]);
  }
  return ret_arr;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var motherInData = function( name ) {
  return !!byName[name.mother];
};

var ageDifferenceWithMother = function( person ) {
  return person.born - byName[person.mother].born;
}

var century = function(person){
  return Math.ceil(person.died / 100);
}

var groupBy = function( arr, sorter ){
  ret_obj = {};
  arr.forEach( function(elt) {
    var key = sorter(elt);
    if( key in ret_obj ) {
      ret_obj[key].push(elt);
    } else {
      ret_obj[key] = [elt];
    }
  });
  return ret_obj;
};

var lifespan = function(person) { 
  return person.died - person.born;
} ;

var every = function( arr, test ) {
  ret_val = true;
  for( index in arr ) {
    ret_val = ret_val && test( arr[index]);
  }
  return ret_val;
};

var some = function( arr, test ) {
  ret_val = false;
  for( index in arr ) {
    ret_val = ret_val || test( arr[index]);
  }
  return ret_val;
};

// var arrays = [[1, 2, 3], [4, 5], [6]];
// console.log( flatten(arrays));

// var knownMothers = ancestry.filter( motherInData );
// var ageDifferences = knownMothers.map( ageDifferenceWithMother );

// var averageAgeDifference = average( ageDifferences);
// console.log(averageAgeDifference.toFixed(1));

// var centuryCohorts = groupBy( ancestry, century );
// for (var group in centuryCohorts) {
//   console.log( group + ": " + average( centuryCohorts[group].map( lifespan )).toFixed(1) );
// };

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
