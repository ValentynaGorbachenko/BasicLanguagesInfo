class Queue(object):
  def __init__(self):
    self.items = []
  def isEmpty(self):
    # len(self.items) == 0
    # print "inside the isEmpty method returns ", self.items == []
    return self.items == []
    # return len(self.items) == 0
  def enqueue(self, item):
    self.items.insert(0, item)
  def dequeue(self):
    if self.isEmpty() is not True:
      return self.items.pop()
  def size(self):
    return len(self.items)
  def printQueue(self):
    print self.items


class Node(object):
  def __init__(self, data, left = None, right = None):
    self.data = data
    self.left = left
    self.right = right
  def inOrder(self):
    # print "class method inOrder", self.data
    if self.left is not None:
      self.left.inOrder()
    print self.data
    if self.right is not None:
      self.right.inOrder()
  def preOrder(self):
    # print "class method preOrder", self.data
    print self.data
    if self.left is not None:
      self.left.preOrder()
    if self.right is not None:
      self.right.preOrder()
  def postOrder(self):
    # print "class method postOrder", self.data
    if self.left is not None:
      self.left.postOrder()
    if self.right is not None:
      self.right.postOrder()
    print self.data
  def levelOrder(self):
    q = Queue()
    q.enqueue(self)
    while q.isEmpty() is not True:
      a = q.dequeue()
      print a.data
      if a.left is not None:
        q.enqueue(a.left)
      if a.right is not None:
        q.enqueue(a.right)




# qq = Queue()
# qq.enqueue("1")
# qq.enqueue("2")
# qq.printQueue()
# print qq.dequeue()
# qq.printQueue()

myNode = Node("a", Node("b", Node("d"), Node("e")), Node("c", Node("f"), Node("g")))

# stand alone function
def inOrderPrint(node):
  if node is not None:
    # print "stand alone function inOrderPrint", node.data
    inOrderPrint(node.left)
    print node.data
    inOrderPrint(node.right)

def levelOrderPrint(node):
  if node is not None:
    q = Queue()
    q.enqueue(node)
    while q.isEmpty() is not True:
      node = q.dequeue()
      print node.data
      if node.left is not None:
        q.enqueue(node.left)
      if node.right is not None:
        q.enqueue(node.right)

levelOrderPrint(myNode)
print "in level order SA", "8"*20


myNode.inOrder()
print "in order ", "*"*20
myNode.preOrder()
print "pre order ", "*"*20
myNode.postOrder()
print "post order ", "*"*20
inOrderPrint(myNode)
print "in order SA", "8"*20
myNode.levelOrder()
print "in level order ", "*"*20