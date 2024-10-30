/**
 * Sampler for 2 dimensional voronoi.
 * Instead of returning coordinates, it returns object associated with those coordinates.
 */
export class VoronoiSampler2D<T> {
    points: { x: number; y: number, content: T }[];
    constructor() {
        this.points = [];
    }

    /**
     * Adds an object in given location.
     * @param x Object's location on x axis.
     * @param y Object's location on y axis.
     * @param content Object.
     */
    addPoint(x: number, y: number, content: T): void {
        this.points.push({ x: x, y: y, content: content });
    }

    /**
     * Returns a copy of all added objects with their locations.
     */
    getPoints(): { x: number; y: number; content: T }[] {
        return [...this.points];
    }

    /**
     * Returns an object nearest to sampled location, or null if no object have been added.
     * @param x Sample's location's x.
     * @param y Sample's location's y.
     */
    sample(x: number, y: number): T | null {
        if (!this.points.length) return null;
        return this.points.
            map(point => ({ dist: Math.hypot(point.x - x, point.y - y), content: point.content })).
            reduce((cl, cur) => cur.dist < cl.dist ? cur : cl).content;
    }
}