function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

let arr = [45, 76, 876, 44, 35, 7, 9, 96, 88, 9];
sort(arr);
