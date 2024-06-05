function merge(arr, left, mid, right) {
    const n1 = mid - left + 1; // 왼쪽 배열의 길이
    const n2 = right - mid; // 오른쪽 배열의 길이

    // 임시 배열 생성
    const L = Array(n1);
    const R = Array(n2);

    for (let i = 0; i < n1; i++) L[i] = arr[left + i]; // 왼쪽 배열에 값 넣어주기
    for (let i = 0; i < n2; i++) R[i] = arr[mid + 1 + i]; // 오른쪽 배열에 값 넣어주기

    let i = 0; // 왼쪽 배열의 첫 번째 인덱스
    let j = 0; // 오른쪽 배열의 첫 번째 인덱스
    let k = left; // 병합된 배열의 첫 번째 인덱스

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k] = L[i++];
        else arr[k] = R[j++];
        k++;
    }

    // 왼쪽 배열에 남은 요소가 있다면 복사
    while (i < n1) arr[k++] = L[i++];
    // 오른쪽 배열에 남은 요소가 있다면 복사
    while (j < n2) arr[k++] = R[j++];
}

function mergeSort(arr, left, right) {
    if (left >= right) return;

    const mid = (left + right) >> 1;
    mergeSort(arr, left, mid); // 왼쪽 분할 [left ... mid]
    mergeSort(arr, mid + 1, right); // 오른쪽 분할 [mid+1 ... right]
    merge(arr, left, mid, right);
}

const arr = [7, 4, 5, 2, 6, 3, 8, 1];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
