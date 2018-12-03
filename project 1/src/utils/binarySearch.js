// export const binarySearch = (arr, target) => {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         const mid = left + Math.floor((right - left) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }


export const leftmost = ( array, leftvalue, min,  max) =>
{
    if (min === max) return min
    let mid = (min + max) / 2

    if (array[mid] < leftvalue) return leftmost(array, leftvalue, mid + 1, max)
    else return leftmost(array, leftvalue, min, mid)
}

export const rightmost = ( array, rightValue,min,  max) =>
{
    if (min === max) return min
    let mid = (min + max + 1) / 2

    if (array[mid] > rightValue) return rightmost(array, rightValue, min, mid - 1)
    else return rightmost(array, rightValue, mid, max)
}