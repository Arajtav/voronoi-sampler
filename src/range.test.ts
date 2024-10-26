import { intRange } from "./range";

test('intRange 0', () => {
    expect(intRange(0).sort((a, b) => a - b)).toEqual([-2, -1, 0, 1, 2]);
});

test('int range 0.5', () => {
    expect(intRange(0.5).sort((a, b) => a - b)).toEqual([-1, 0, 1, 2]);
});

test('int range -0.5', () => {
    expect(intRange(-0.5).sort((a, b) => a - b)).toEqual([-2, -1, 0, 1]);
});