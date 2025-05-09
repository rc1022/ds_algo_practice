// Implement a Simple Binary Tree with Insert
class BinaryTreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(val) {
        // insert when empty root
        if (!this.root) {
            this.root = new BinaryTreeNode(val);
        }

        const newNode = new BinaryTreeNode(val);

        // queue to store the travelled node

        let travelledNode = [this.root];

        while ( travelledNode.length > 0 ) {
            let current = travelledNode.shift();

            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                travelledNode.push(current.left)
            }

            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                travelledNode.push(current.right);
            }
        }
    }

    display() {
        if (!this.root){
            return;
        }

        let displayTree = [this.root];
        
        console.log(`${this.root.value} \n`);

        while (displayTree.length > 0) {
            let left;
            let right;
            let current = displayTree.shift();

            if (current.left) {
                left = current.left.value;
                displayTree.push(current.left);
            }
            if (current.right) {
                right = current.right.value;
                displayTree.push(current.right);
            }
            console.log(`
                /   \\
        ${left} ${right}
                `)
        }
    }
}

let bt = new BinaryTree();

bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.display();