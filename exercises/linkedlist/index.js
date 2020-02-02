// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0
    let pointer = this.head;

    while(pointer) {
      counter++;
      pointer = pointer.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let pointer = this.head;

    while(pointer.next) {
      pointer = pointer.next;
    }

    return pointer;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    else if (!this.head.next) {
      this.head = null;
    }
    else {
      let node = this.head;

      while(node.next && node.next.next) {
        node = node.next;
      }

      node.next = null;
    }
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    }
    else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let pointer = this.head;

    while (pointer) {
      if (index === counter) {
        return pointer;
      }

      counter++;
      pointer = pointer.next;
    }

    return null;
  }
}

module.exports = { Node, LinkedList };
