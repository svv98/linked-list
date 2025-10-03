class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

export class LinkedList {
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
            return this.toString();
        }
        let newNode = new Node(value);
        let current = this.head;
        let last;
        for(let i=0; i<=index; i++){
            if(i==index) {
                last.nextNode = newNode;
                newNode.nextNode = current;
                return this.toString();
            }
            last = current;
            current = current.nextNode;
        }      
    }

    removeAt(index){
        if(index>=this.size()) return 'Index Doesnt Exists'
        if(index==(this.size()-1)) {
            this.pop();
            return this.toString();
        }
        let current = this.head;
        if(index==0) {
            this.head = current.nextNode;
            return this.toString();
        }
        let last;
        for(let i=0; i<=index; i++){
            if(i==index) {
                last.nextNode = current.nextNode;
                return this.toString();
            }
            last = current;
            current = current.nextNode;
        }    
    }

}