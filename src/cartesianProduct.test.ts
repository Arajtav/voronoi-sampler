import { cartesianProduct } from "./cartesianProduct";

test('cartesian product 1d', () => {
    expect(cartesianProduct([[-1, 0, 1]]).sort()).toEqual([[-1], [0], [1]].sort());
});

test('cartesian product 2d', () => {
    expect(cartesianProduct([[-1, 1], [-1, 1]]).sort()).toEqual([[-1, -1], [-1, 1], [1, 1], [1, -1]].sort());
});