function sort(ar) {
  for (let i = 0; i < ar.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[j] < ar[min]) {
        let temp = ar[j];
        ar[j] = ar[min];
        ar[min] = temp;
      }
    }
  }
  console.log(ar);
}
let ar = [45, 67, 8, 9, 9, 86, 7, 97, 5, 4, 3, 4, 55, 67, 8, 8, 9987, 65, 4, 4];
sort(ar);
