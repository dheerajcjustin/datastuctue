function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}
let arr = [
  45, 66, 7, 8, 9, 876, 54, 4, 66, 7, 8, 9, 76, 54, 4, 5, 7, 8, 7, 65, 5, 67,
];
insertionSort(arr);
