function isPrime(number) {
  if (number === 1) return false;

  if (number === 2) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function sequenceFilter(A, B) {
  const arrayB = [...B];

  const numCounter = {};

  for (const element of B) {
    if (numCounter[element]) {
      numCounter[element] += 1;
    } else {
      numCounter[element] = 1;
    }
  }

  const C = [];

  for (const element of A) {
    if (
      !arrayB.includes(element) ||
      (arrayB.includes(element) && !isPrime(numCounter[element]))
    ) {
      C.push(element);
    }
  }
  return C;
}
const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];
console.log(sequenceFilter(A, B));
