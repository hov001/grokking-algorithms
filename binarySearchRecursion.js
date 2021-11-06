// O(logn)

function binarySearchRecursion(arr, n) {
  const midPos = Math.floor(arr.length / 2);

  if (arr[midPos] === n) {
    return midPos;
  }

  let newArr = arr[midPos] > n ? arr.slice(0, midPos) : arr.slice(midPos);

  return binarySearchRecursion(newArr, n);
}

console.log(binarySearchRecursion([1, 2, 3, 4], 4));
console.log(binarySearchRecursion([4, 6, 20, 28, 30], 30));
