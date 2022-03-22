
let misses = 0;
let hits = 0;
let change = 0;

function switchDifficulty () {
  if (hits === 4 && change < 2) {
    change++;
    hits = 0;
  } else if (misses === 2 && change > 0) {
    change--;
    hits = 0;
    misses = 0;
  } else if (hits === 4 && change === 2) {
    hits = 0;
  } else if (misses === 2 && change === 0) {
    hits = 0;
    change = 0;
  }
}

function test1 () {
  console.log('test');
}
