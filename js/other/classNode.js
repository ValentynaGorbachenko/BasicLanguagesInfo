"use strict";
class Queue{
  constructor(queue = []){
    this.queue = queue;
  }
  isEmpty(){
    return this.queue.length === 0;
  }
  enqueue(item){
    this.queue.unshift(item);
  }
  dequeue(){
    if (!this.isEmpty()){
      return this.queue.pop();
    }
  }
  size(){
    return this.queue.length;
  }
}


class Node{
  constructor (data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
  // depth first search
  inOrder() {
    // console.log("inOrder method");
    if (this.left){
      this.left.inOrder();
    }
    console.log(this.data);
    if (this.right){
      this.right.inOrder();
    }
  }
  preOrder() {
    // console.log("preOrder method");
    console.log(this.data);
    if (this.left) {
      this.left.preOrder();
    }
    if (this.right){
      this.right.preOrder();
    }
  }
  postOrder(){
    // console.log("postOrder method");
    if (this.left) {
      this.left.postOrder();
    }
    if (this.right){
      this.right.postOrder();
    }
    console.log(this.data);
  }
  // breadth first search
  levelOrder(){
    let q = new Queue();
    let node;
    q.enqueue(this);
    // console.log(q);
    // console.log(!q.isEmpty())
    while (!q.isEmpty()){
      node = q.dequeue();
      console.log(node.data);
      if (node.left){
        q.enqueue(node.left);
      }
      if (node.right){
        q.enqueue(node.right);
      }
    }
  }
}
/*
let q = new Queue();
console.log(q.size());
q.enqueue("1");
q.enqueue("2");
console.log(q);
q.dequeue();
console.log(q);
*/
let myNode = new Node("a", new Node("b"), new Node("c"));
// console.log(myNode);
console.log("in order");
myNode.inOrder();
console.log("pre order");
myNode.preOrder();
console.log("post order");
myNode.postOrder();
console.log("in level order");
myNode.levelOrder();