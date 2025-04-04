
//  this function is for finding if there is any intersection between two linkedlist , if there is any then returns 
// that intersected node

function findIntersection( head1, head2) {
    let l1 = head1;
    let l2 =head2

    if(l1 === null || l2 === null) return null
    while(l1 !== l2){
        l1 = l1 === null ? l2 : l1.next;
        l2 = l2===null ? l1 : l2.next
    }
    return l1
}