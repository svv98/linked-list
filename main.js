class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor (){
        this.head = null;
    }

    append(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value){
    let newNode = new Node(value)
    if(!this.head){
        this.head = newNode;
        return
    }
    newNode.nextNode = this.head;
    this.head = newNode;
    }

    size(){
        let counter = 0;
        let current = this.head;
        while(current){
            current = current.nextNode;
            counter++
        }
        return counter
    }

    getHead(){
        return this.head
    }

    tail(){
        let current = this.head;
        while(current){
            current = current.nextNode;
            if(current.nextNode==null) return current
        }
    }

    at(index){
        if(index>=this.size()) return 'this index doesnt exist'
        let current = this.head;
        for(let i=0; i<=index; i++){
            if(i==index) return current
            current = current.nextNode;
        }
    }

    pop(){
        let last;
        let current = this.head;
        while(current){
            if(current.nextNode==null) {
                last.nextNode = null;
                return
            }
            last = current;
            current = current.nextNode;
        }
    }

    contains(value){
    let counter = 0;
    let current = this.head;
    while(current){
        if(current.value == value) return true
        current = current.nextNode;
        counter++
    }
    return false
    }

    find(value){
        let counter = 0;
        let current = this.head;
        while(current){
            if(current.value == value) return counter
            current = current.nextNode;
            counter++
        }
        return 'DOESNT EXISTS'
    }

    toString(){
        let current = this.head;
        let result = '';
        while(current){
            result+= '( ' + current.value + ' ) → ';
            current = current.nextNode;
        }
        return result + 'null'
    }

    insertAt(value, index){
        if(index>this.size()) return 'Index Doesnt Exists'
        if(index==0) {
            this.prepend(value);
            return list.toString();
        }
        let newNode = new Node(value);
        let current = this.head;
        let last;
        for(let i=0; i<=index; i++){
            if(i==index) {
                last.nextNode = newNode;
                newNode.nextNode = current;
                return list.toString();
            }
            last = current;
            current = current.nextNode;
        }      
    }

    removeAt(index){
        if(index>=this.size()) return 'Index Doesnt Exists'
        if(index==(this.size()-1)) {
            this.pop();
            return list.toString();
        }
        let current = this.head;
        if(index==0) {
            this.head = current.nextNode;
            return list.toString();
        }
        let last;
        for(let i=0; i<=index; i++){
            if(i==index) {
                last.nextNode = current.nextNode;
                return list.toString();
            }
            last = current;
            current = current.nextNode;
        }    
    }

}

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
console.log(list.removeAt(1)); */