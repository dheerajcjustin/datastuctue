function selectionSort(ar) {
  for (let i = 0; i < ar.length; i++) {
    let min = i;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] < ar[min]) {
        let temp = ar[j];
        ar[j] = ar[min];
        ar[i] = temp;
      }
    }
  }

  console.log(ar);
}

let ar = [34, 565, 8, 67, 64, 47, 89, 65, 4, 5, 6, 7, 65487, 65];
selectionSort(ar);
