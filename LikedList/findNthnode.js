// function for finding the node at a specific position

function nodeAtSpecificPosition(head , position){
    if( head === null)  return null;

    let current = head;
    let index = 1;
    while(current != null){
        if(position === index){
            return current
        }
        index ++;
        current = current.next
    }
    return null
}