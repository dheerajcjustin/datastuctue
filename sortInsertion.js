function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}
let arr = [34, 6, 76, 5, 43, 3, 46, 8, 9, 0, 8, 6, 54, 34, 56, 7, 8, 9];
sort(arr);
