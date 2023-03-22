class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    var linked = new Node(val);
    // if head is null, this.head = linked
    if (this.head === null) {
      this.head = linked;
      this.tail = linked;
      return;
    }
    this.tail.next = linked;
    this.tail = this.tail.next;
  }
}

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

var linked = new LinkedList();
console.log(linked.head);

linked.append(1);
console.log(linked.head);
linked.append(3);
console.log(linked.head);
linked.append(3);
console.log(linked.head);
linked.append(3);
console.log(linked.head);
