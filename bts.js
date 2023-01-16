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
  addNode(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    }

    const searchTree = (node) => {
      if (data < node.data) {
        //left node
        if (node.left === null) {
          node.left = new Node(data);
          return;
        } else {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        //right node
        if (node.right === null) {
          node.right = new Node(data);
          return;
        } else {
          return searchTree(node.right);
        }
      } else return null;
    };
    searchTree(node);
  } //end of add

  traversal(traversalFunction) {
    const node = this.root;
    traversalFunction(node);
  }
  delete(data) {
    const deleteNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (node.data == data) {
        if (node.left === null && node.right) {
          //node has no child
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = deleteNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
        //node less than data
      } else {
        node.right = deleteNode(node.right, data);
        return node;
      }
    };
    this.root = deleteNode(this.root, data);
  }
  minNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    //treeil onum ila
    if (node === null) return node;
    //when data and node data same akkubole
    if (node.data === data) {
      //no childe method
      if (node.left === null && node.right === null) {
        return null;
        // signl node left or ritht
      } else if (node.right === null) return node.left;
      else if (node.left === null) return node.right;
      //both node has elments
      else {
        let tempNode = this.minNode(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
      }
    } // data less than or greater tha n
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}

const inOrder = (node) => {
  if (node === null) {
    return;
  }
  inOrder(node.left);
  console.log(node.data);
  inOrder(node.right);
};

const preOrder = (node) => {
  if (node == null) return null;
  console.log(node.data);
  preOrder(node.left);
  preOrder(node.right);
};
const postOrder = (node) => {
  if (node == null) return null;
  preOrder(node.left);
  preOrder(node.right);
  console.log(node.data);
};

const bts = new BTS();
bts.addNode(45);
bts.addNode(78);
bts.addNode(56);
bts.addNode(67);
bts.addNode(88);
bts.traversal(preOrder);

bts.remove(56);
console.log("after delete");

bts.traversal(preOrder);
