// binary tree
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  append(val) {
    let currentNode = this.root;
    if (currentNode === null) {
      this.root = new Node(val);
      return;
    }
    while (true) {
      if (currentNode.data < val) {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }
}

let newTree = new Tree();

const inOrderTraversal = (node) => {
  if (node.left) {
    inOrderTraversal(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrderTraversal(node.right);
  }
};

newTree.append(1);
newTree.append(0);
newTree.append(2);

newTree.append(8);

console.log(newTree);

inOrderTraversal(newTree.root);
