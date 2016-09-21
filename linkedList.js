function linkedList() {
    this.head = null;
    this.tail = null;
    this._length = 0;
}

linkedList.prototype.add = function(newItem) {
    var newNode = {
        data: newItem,
        next: null
    }
    if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this._length++;
}

linkedList.prototype.print = function() {
    console.log(this.head);
}

linkedList.prototype.createLoop = function() {
    this.tail.next = this.head;
}

linkedList.prototype.detectLoop = function() {
    var first = this.head;

    if (first == null) // list does not exist..so no loop either.
        return false;

    var slow, fast; // create two references.

    slow = fast = first; // make both refer to the start of the list.

    while (fast != null && fast.next != null) {

        slow = slow.next; // 1 hop.
        fast = fast.next.next; // 2 hops.

        if (slow == fast) // if the two ever meet...we have a loop.
            return true;
    }
    return false;
}

var link = new linkedList();
link.add(1);
link.add(10);
link.add(100);
link.add(1000);
link.print();
link.createLoop();
link.print();
console.log(link.detectLoop());
console.log(link._length);
