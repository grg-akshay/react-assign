import {leftmost, rightmost} from '../../utils/binarySearch';

test('should check leftmost binary search works as expected', () =>{
    expect(leftmost([1000, 1002, 1004, 1006], 95, 0, 3  )).toBe(0);
    expect(leftmost([1000, 1002, 1004, 1006], 1000, 0, 3  )).toBe(0);
    expect(leftmost([1000, 1002, 1004, 1006], 1001, 0, 3  )).toBe(1);
})

test('should check rightmost binary search works as expected', () =>{
    expect(rightmost([1000, 1002, 1004, 1006], 1005, 0, 3  )).toBe(2);
    expect(rightmost([1000, 1002, 1004, 1006], 1007, 0, 3  )).toBe(3);
})