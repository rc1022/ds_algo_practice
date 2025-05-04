// ------ Linked List -------

// Coding Exercise 1: Implement a Singly Linked List
class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.length = 0;
    }



    // insert a node at the end
    addNode(newNode) {
        if (this.head === null){
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }

    //insert node at the beginning
    addNodeToFront (newNode) {
        if (this.length === 0) { 
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    //displaying linked list
    display() {
        let currentNode = this.head;
        let counter  = 1;
        while (currentNode) {
            console.log(`Node${counter}'s value: ${currentNode.value}`);
            currentNode = currentNode.next;
            counter++;
        }
    }

// Coding Exercise 2: Find the Middle of a Linked List
    findMiddle() {
        if (!this.head) return;

        let slow = this.head;
        let fast = this.head;

        while ( fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }

// Search by value()
    search(num) {
        if (!this.head) return;
        let currentNode = this.head;
        for (let counter = 1; counter < this.length; counter++){
            if (num === currentNode.value) { 
                console.log(`Node in position ${counter} has value:${currentNode.value}`);
                return;
            }
            currentNode = currentNode.next;
        }
    }

// Additional Exercise: Reverse a link list
    reverse() {
        if (this.head === null) return;
       let prev = null;
       let currentNode = this.head;

       while (currentNode !== null) {
            let next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
       }
       
       this.head = prev;
        
    }

// Deleting an node
    delete(target) {
        if (!this.head) return;
        let currentNode = this.head;
        if (currentNode.value == target) {
            this.head = currentNode.next;
            this.length--;
            return true;
        }

        while (currentNode.next) {
            if (currentNode.next.value === target) {
                currentNode.next = currentNode.next.next;
                this.length--;
                return true;
            } 
            currentNode = currentNode.next;
        }
        return false;

    }
}

function createLink(link){
    link.addNode(new Node(10));
    link.addNode(new Node(20));
    link.addNode(new Node(30));
    link.addNode(new Node(40));
    link.addNode(new Node(50));
    link.addNode(new Node(60));
    link.addNode(new Node(70));
    link.addNodeToFront(new Node(80));
}

// test
const link = new LinkedList();
createLink(link);

// Additional challenge 2Check if Linked List is a Palindrome
// [1 - 2 - 2 - 1] -> yes [ 1 - 2 - 3 - 4 - 2] -> no
function isPalindrome(list){
    if (!list.head || !list.head.next) return true;
    // using two pointers
    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let currentNode = slow;

    while (currentNode) {
        let next = currentNode.next;
        currentNode.next = prev
        prev = currentNode
        currentNode = next;
    }
    
    let first = list.head;
    let second = prev;

    while (first && second) {
        if( first.value !== second.value ) {
            return false;
        }
        first = first.next;
        second = second.next
    }
    
    return true;
}


// Additional challenge 3: Merge Two Sorted Linked Lists
function mergeTwoLists(list1, list2) {
    // list1 and list2 are LinkedList instances 
    // both lists sorted
    // returning new sorted linked list

    let nodeA = list1.head;
    let nodeB = list2.head;

    let dummy = new Node(-1);
    let tail = dummy;

    while (nodeA && nodeB){
        if (nodeA.value < nodeB.value){
            tail.next = nodeA;
            nodeA = nodeA.next;
        } else {
            tail.next = nodeB;
            nodeB = nodeB.next;
        }
        tail = tail.next;
    }
    while (nodeA) {
        tail.next = nodeA;
        nodeA = nodeA.next;
    }
    while (nodeB){
        tail.next = nodeB;
        nodeB = nodeB.next;
    }
    
    let newList = new LinkedList();
    newList.head = dummy.next;
    return newList;
    

}

let A = new LinkedList();
let B = new LinkedList();
A.addNode(new Node(1));
A.addNode(new Node(3));
A.addNode(new Node(5));
A.addNode(new Node(7));

B.addNode(new Node(2));
B.addNode(new Node(4));
B.addNode(new Node(6));
B.addNode(new Node(8));



let C = new LinkedList();
C.addNode(new Node(11));
C.addNode(new Node(22));
C.addNode(new Node(33));
C.addNode(new Node(22));
C.addNode(new Node(11));
console.log(isPalindrome(C));

