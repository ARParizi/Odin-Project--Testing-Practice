import { analyzeArray } from './analyzeArray.js';

test('Analyze [1, 2, 3]', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    });
});

test('Analyze [8, 10]', () => {
    expect(analyzeArray([8, 10])).toEqual({
        average: 9,
        min: 8,
        max: 10,
        length: 2
    });
});

test('Analyze [7, 12, 21, 40, 35]', () => {
    expect(analyzeArray([7, 12, 21, 40, 35])).toEqual({
        average: 23,
        min: 7,
        max: 40,
        length: 5
    });
});

test('Analyze [7, 12, 21, 40, 35]', () => {
    expect(analyzeArray([7, 12, 21, 40, 35])).not.toEqual({
        average: 230,
        min: 7,
        max: 40,
        length: 5
    });
});