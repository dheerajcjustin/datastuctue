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

let arr = [45, 565, 765, 343, 546, 67, 65, 43432, 32, 24, 67, 9, 7, 76, 54, 5];
insertionSort(arr);
