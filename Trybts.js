class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BTS {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      searchNode(this.root, data);
    }

    function searchNode(node, data) {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          console.log("left");
          return;
        } else {
          return searchNode(node.left, data);
        }
      }
      if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          console.log("right");
          return;
        } else {
          return searchNode(node.right, data);
        }
      }
      return null;
    }
  }
  display() {
    const node = this.root;
    inOrder(node);
    function inOrder(node) {
      if (node === null) {
        return;
      }
      inOrder(node.left);
      console.log(node.data);
      inOrder(node.right);
    }
  }
  delete(data) {
    const node = this.root;
    this.root = deleteNode(node, data);
    function deleteNode(node, data) {
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = deleteNode(node.right, node.data);
        return node;
      }
      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      }
    }
  }
}
const bts = new BTS();
bts.insert(45);
bts.insert(56);
bts.insert(55);
bts.insert(78);
bts.display();
bts.delete(55);
console.log("after deletion");
bts.display();
