// 702 https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/

const searchInSortedArrayUnknownSize = (reader, target) => {
    let left = 0;
    let right = 1;

    while(reader.get(right) < target) {
        left = right;
        right = right*2;
    }

    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(reader.get(mid) === target) return mid;
        if(reader.get(left) <= target && target < reader.get(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1
}