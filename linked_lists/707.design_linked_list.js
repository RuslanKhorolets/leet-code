function findByIndex(index, head) {
  let _index = 0;
  let current = head;

  while (_index < index && current.next) {
    current = current.next;
    _index++;
  }

  return current;
}

var Node = function (val, next = null) {
  this.val = val;
  this.next = next;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index > this.size - 1 || index < 0 || this.size === 0) return -1;
  const current = findByIndex(index, this.head);
  if (!current) return -1;
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val, this.head);
  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);

  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    return this.addAtHead(val);
  }

  if (index === this.size) {
    return this.addAtTail(val);
  }

  const node = new Node(val);

  if (index > this.size) {
    return;
  }

  const current = findByIndex(index - 1, this.head);

  node.next = current.next;

  current.next = node;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  const current = findByIndex(index - 1, this.head);

  current.next = current.next.next ? current.next.next : null;

  if (!current.next) {
    this.tail = current;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
