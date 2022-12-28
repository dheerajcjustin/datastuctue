function sort(arr) {
  for (i = 1; i < arr.length; i++) {
    let current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}

function bubuleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

arr = [34, 56, 78, 9, 7, 445, 7, 8, 9776, 544, 667, 89, 3434];
bubuleSort(arr);
// sort(arr);
