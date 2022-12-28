function bububleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("hai sugan alle");
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

let arr = [34, 656, 667, 879, 65, 54, 465, 67, 65, 454, 7];
bububleSort(arr);
