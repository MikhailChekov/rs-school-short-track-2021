const ListNode = require('../extensions/list-node');
// /**
//  * Implement the Queue with a given interface via linked list (use ListNode extension above).
//  *
//  * @example
//  * const queue = new Queue();
//  *
//  * queue.enqueue(1); // adds the element to the queue
//  * queue.enqueue(3); // adds the element to the queue
//  * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
//  *
//  */

class Queue {
  constructor() {
    this.items = [];
    this.list = ListNode();
  }

  enqueue(e) {
    this.items.push(e);
  }

  dequeue() {
    if (this.items.length !== 0) {
      return this.items.shift();
    }
    return 'no elements';
  }
}
module.exports = Queue;
