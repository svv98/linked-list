import { LinkedList } from './linkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

/* //Size
console.log('Size= ' + list.size());
console.log('----------'); */

/* //Head
console.log('Head= ');
console.log(list.getHead());
console.log('----------'); */

/* //Tail
console.log('tail= ');
console.log(list.tail());
console.log('----------'); */

/* //At
console.log('at 5 = ');
console.log(list.at(5));
console.log('----------'); */

/* //Pop
console.log('pop = ');
list.pop();
console.log(list);
console.log('Size= ' + list.size());
console.log('----------'); */

/* //Contains
console.log('contains = ' + list.contains('turtle'));
console.log('----------'); */

/* //Find
console.log('find = ' + list.find('turtle'));
console.log('----------'); */

//ToString
console.log(list.toString());


/* //InsertAt
console.log(list.insertAt('snail', 1)); */

/* //RemoveAt
console.log(list.removeAt(2)); */