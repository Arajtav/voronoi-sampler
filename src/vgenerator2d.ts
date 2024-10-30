import { intRange } from "./range";
import { Random } from 'random';

/**
 * 2 dimensional voronoi generator.
 */
export class VoronoiGenerator2D {
    seed: number;
    constructor(seed: number) {
        this.seed = seed;
    }

    /**
     * Returns a point nearest to sampled location.
     * @param x Sample's location's x.
     * @param y Sample's location's y.
     */
    sample(x: number, y: number): { x: number, y: number } {
        const px: number[] = intRange(x);
        const py: number[] = intRange(y);
        const points: { x: number, y: number }[] = [];
        py.forEach((ppy) => {
            px.forEach((ppx) => {
                // what
                const rng = new Random(`${this.seed}-${ppx}-${ppy}`);
                points.push({ x: ppx + (rng.float() * 2) - 1, y: ppy + (rng.float() * 2) - 1 });
            });
        });
        return points.
            map(point => ({ x: point.x, y: point.y, dist: Math.hypot(point.x - x, point.y - y) })).
            reduce((cl, cur) => cur.dist < cl.dist ? cur : cl);
    }
}