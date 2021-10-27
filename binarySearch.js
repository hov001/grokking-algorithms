function binarySearch(arr, n) {
  let low = 0;
  let hight = arr.length - 1;

  while (low <= hight) {
    const midPos = Math.floor((low + hight) / 2);
    const guess = arr[midPos];

    if (guess === n) return midPos;

    if (guess > n) hight = midPos - 1;
    else low = midPos + 1;
  }

  return "not found";
}

console.log(binarySearch([1, 2, 3, 4], 4));
console.log(binarySearch([4, 6, 20, 28, 30], 30));
