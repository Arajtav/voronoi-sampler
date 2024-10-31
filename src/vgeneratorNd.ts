import { Random } from "random";
import { intRange } from "./range";

function acp2d(ar: number[][]): number[][] {
    let tmp: number[][] = [];
    ar.forEach(el => {
        tmp.push([...el]);
    })
    return tmp;
}

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
        let pa: number[][] = coords.map(c => intRange(c));
        let points: number[][] = [];

        // TODO: rewirte whatever that is, bonus points for not using recursion
        // i'm really sorry for that, i have no idea how did i manage to write it, neither do i have idea how it works
        // however it works, and i know that it does what it should, which is converting stuff like [[1,2], [2,3]] to [[1,2], [1,3], [2,2], [2,3]]
        function tmp(rn: number[][]): void {
            if (rn.length == 1) {
                points = [];
                (rn[0] as number[]).forEach(el => {
                    points.push([el]);
                })
                return;
            }

            tmp(rn.slice(1));
            let a = acp2d(points);
            points = [];
            (rn[0] as number[]).forEach(c => {
                let b = acp2d(a);
                b.forEach(el => {
                    el.push(c);
                })
                points.push(...acp2d(b));
            })
        }
        tmp(pa);

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