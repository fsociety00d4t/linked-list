class Node {
    constructor(value, next=null) {
        this.value=value;
        this.next=next;
    }
}

class LinkedList {
    constructor() {
        this.head=null;
        this.size=0;
    }

    append (value) {
        let current = this.head;
        while (current) {
            if (current.next===null) {
                 current.next = new Node (value, null);
                this.size++;
                break;
            }          
            current = current.next;         
        }
    }

    prepend(value) {
        this.head = new Node (value, this.head);
        this.size++;
    }

    size (){
        console.log(this.size);
        return this.size;
    }

    returnHead () {
        console.log(this.head);
    }

    tail () {
        let current = this.head;
        while(current) {
            if (current.next===null)
            console.log(current);

        current = current.next;
        }
    }

    atIndex(index) {
        let cnt=0;
        let current = this.head;
        while(current) {
            cnt++;
            if (cnt===index){
                console.log(current);
            }
           
        current = current.next;
        } 
    }

    pop() {
        let current = this.head;
        let previous;
        if (this.size===0) return;
        else {
            while (current.next!==null) {
                             
                    previous = current;
                    current = current.next;        
            }
                previous.next = null; 
        }
        this.size--;
    }
    
    contains (data) {
       let  current = this.head;
        while(current) {
            if (current.value===data) 
            return current.value===data;

            current = current.next;
        }
            return false;     
    }

    find(value) {
        let current = this.head;
        let cnt=0;
        while(current) {
            if (current.value===value) 
            {
                return cnt;
            }
            cnt++;
            current = current.next;
        }       
        return 'not in the list';
    }

    printList() {
        let current = this.head;  
        while (current) {
            console.log(current.value.toString());
            current = current.next;
        }
    }
    
    insertAt(value,index) {
        let cnt=0;
        let current = this.head;
        while(current) {
            cnt++;
            if (cnt===index) 
            {   
                current.next = new Node (value, current.next);
            }

            current = current.next;
        }
        this.size++;
        return 'Current index does not exists';
    }

    removeAt (index) {
        let current = this.head;
        let cnt=0;
        let previous;
        while (current) {
            previous = current;
            cnt++;
            if (cnt===index) {
                current = current.next;
                previous.next = current;
            }

            current = current.next;
            previous.next = current;
            
        }
        this.size--;
    }
    
}



const myLinkedList = new LinkedList();
myLinkedList.prepend('777');
myLinkedList.prepend('666');
myLinkedList.prepend('555');
myLinkedList.append('should be last');
myLinkedList.append('after last');
myLinkedList.append('something');
console.log(myLinkedList);
myLinkedList.printList();
console.log('the size of the list is ' + myLinkedList.size);
myLinkedList.returnHead();
myLinkedList.tail();
myLinkedList.atIndex(2);
myLinkedList.pop();
myLinkedList.printList();
console.log(myLinkedList.contains('555'));
console.log(myLinkedList.contains('6665'));
console.log(myLinkedList.find('555'));
console.log(myLinkedList.find('after lfast'));
myLinkedList.insertAt('new value',3);
myLinkedList.printList();
myLinkedList.removeAt(3);
myLinkedList.printList();



