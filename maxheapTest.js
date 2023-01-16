class MaxHeap {
  constructor() {
    this.heap = [];
  }
  add(element) {
    this.heap.push(element);
    let index = this.heap.length - 1;
    const current = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (parent <= current) {
        this.heap[parentIndex] = current;
        this.heap[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
}
const heap = new MaxHeap();
heap.add(45);
heap.add(67);
heap.add(1);
heap.add(56);
heap.add(9);
heap.add(78);
console.log(heap);
