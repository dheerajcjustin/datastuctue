class maxHeap {
  constructor() {
    this.heap = [];
  }
  add(element) {
    this.heap.push(element);
    let currentIndex = this.heap.length - 1;
    const current = this.heap[currentIndex];
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.heap[parentIndex];
      if (parent >= current) {
        this.heap[parentIndex] = current;
        this.heap[currentIndex] = parent;
        currentIndex = parentIndex;
      } else break;
    }
  }
  remove() {
    const max = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;
    let index = 0;
    const length = this.heap.length;
    const current = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;

      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > current) swap = leftChild;
        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if (
            (swap === null && rightChild > current) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChild;
          }
        }
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = current;
        index = swap;
      }
    }
    return max;
  }
}
const maxH = new maxHeap();
maxH.add(45);
maxH.add(56);
maxH.add(78);
maxH.add(4);
maxH.add(5);
console.log(maxH);
console.log("remove", maxH.remove());
console.log(maxH);
