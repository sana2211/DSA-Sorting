class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
  
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
  
    insertCycle(item, next) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        let nextNode = this.head;
        while (nextNode.next !== null && nextNode.value !== next) {
          nextNode = nextNode.next;
        }
        tempNode.next = new _Node(item, nextNode);
      }
    }
  
    insertBefore(item, value) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let currNode = this.head;
        let previousNode = this.head;
  
        while (currNode !== null && currNode.value !== value) {
          previousNode = currNode;
          currNode = currNode.next;
        }
        if (currNode === null) {
          this.insertLast(item);
          return;
        }
        previousNode.next = new _Node(item, currNode);
      }
    }
  
    insertAfter(item, value) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let currNode = this.head;
  
        while (currNode !== null && currNode.value !== value) {
          currNode = currNode.next;
        }
        if (currNode === null) {
          this.insertLast(item);
          return;
        }
        currNode.next = new _Node(item, currNode.next);
      }
    }
  
    insertAt(item, num) {
      if (this.head === null) {
        this.insertFirst(item);
      }
      if (num === 1) {
        this.insertFirst(item);
      } else {
        let currNode = this.head;
  
        for (let i = 2; i < num; i++) {
          if (currNode === null) {
            this.insertLast(item);
            return;
          }
          currNode = currNode.next;
        }
        this.insertAfter(item, currNode.value);
      }
    }
  
    find(item) {
      let currNode = this.head;
  
      if (!this.head) {
        return null;
      }
      while (currNode.value !== item) {
        if (currNode.next === null) {
          return null;
        } else {
          currNode = currNode.next;
        }
      }
  
      return currNode;
    }
  
    remove(item) {
      if (!this.head) {
        return null;
      }
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
  
      let currNode = this.head;
      let previousNode = this.head;
  
      while (currNode !== null && currNode.value !== item) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      }
      previousNode.next = currNode.next;
    }
  }
  
  module.exports = LinkedList;
