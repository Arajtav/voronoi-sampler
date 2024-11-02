import { Random } from "random";
import { intRange } from "./range";
import { cartesianProduct } from "./cartesianProduct";

export class VoronoiGeneratorND {
    seed: number;
    dims: number;
    constructor(dimensions: number, seed: number) {
        if (dimensions % 1 != 0 || dimensions < 1) throw new Error('"dimensions" must be a positive int, greater than 0');
        this.seed = seed;
        this.dims = dimensions;
    }

    sample(coords: number[]): number[] {
        if (coords.length != this.dims) throw new Error('wrong number of coords');

        let points = cartesianProduct(coords.map(c => intRange(c)));
        points.forEach(v => {
            const rng = new Random(`${this.seed}-${v.join('-')}`);
            for (let i = 0; i < v.length; i++) {
                (v[i] as number) += (rng.float() * 2) - 1;
            }
        });

        return points.
            map(point => {
                const dist = Math.hypot(...point.map((v, i) => {
                    if (coords[i] === undefined) throw new Error("shoudln't happen");
                    return v - coords[i];
                }))
                return { point: point, dist: dist };
            }).
            reduce((cl, cur) => cur.dist < cl.dist ? cur : cl).point;
    }
}