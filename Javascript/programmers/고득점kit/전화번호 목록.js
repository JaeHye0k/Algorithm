function solution(phone_book) {
    // 오름차순으로 정렬
    phone_book.sort();
    for(let i=0; i<phone_book.length-1; i++){
        if(phone_book[i+1].startsWith(phone_book[i])) return false; 
    }
    return true;
}