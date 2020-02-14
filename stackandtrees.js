// # Stacks and Trees

// ## Binary Tree

// Write a constructor function called BinaryTree with no arguments. It should initialize one attribute:

// * `head` with `null` o
// * `root` with `null`

// The methods that you will implement are:

// * add (create a new Node)
// * traverseDFS
// * traverseBFS

// ```javascript
// const tree = new BinaryTree();
// tree.add(4);
// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(3);


class Nodo {
    constructor(data, next = null) {
        this.data = data;
        this.left = next;
        this.right= next;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(num) {
        let newNodo = new Nodo(num)
        if (this.root === null) {
            this.root = newNodo;
        } else if(this.root.left === null && newNodo.data<this.root.data){
            this.root.left=newNodo        
        } else {
            this.root.right=newNodo        
        }
    }
    addAtNode(num,numNodo,initNode){
        if(initNode.data===numNodo){
            if(initNode.left===null && num<initNode.data){            
               return initNode.left=new Nodo(num);
            } else {
                return initNode.right=new Nodo(num);
            }
        }
        return this.addAtNode(num,numNodo,initNode.left)
        this.addAtNode(1,2,4)
        this.addAtNode(1,2,2)
    }
    traverseDFS(){
        return null;
    }
    traversBFS(){
    }
}
let arbol = new BinaryTree();
arbol.add(4);
arbol.add(7);
arbol.add(2);
arbol.addAtNode(1,2,arbol.root)
arbol.addAtNode(3,2,arbol.root)
arbol.add(3);
console.log(arbol)