/**
 * Sampler for 2 dimensional voronoi/
 * Instead of returning coordinates, it returns object associated with those coordinates.
 */
export class VoronoiSampler3D<T> {
    points: { x: number, y: number, z: number, content: T }[];
    constructor() {
        this.points = [];
    }

    /**
     * Adds an object in given location.
     * @param x Object's location on x axis.
     * @param y Object's location on y axis.
     * @param z Object's location on z axis.
     * @param content Object.
     */
    addPoint(x: number, y: number, z: number, content: T): void {
        this.points.push({ x: x, y: y, z: z, content: content });
    }

    /**
     * Returns a copy of all added objects with their locations.
     */
    getPoints(): { x: number, y: number, z: number, content: T }[] {
        return [...this.points];
    }

    /**
     * Returns an object nearest to sampled location, or null if no object have been added.
     * @param x Sample's location's x.
     * @param y Sample's location's y.
     * @param z Sample's location's z.
     */
    sample(x: number, y: number, z: number): T | null {
        if (!this.points.length) return null;
        return this.points.
            map(point => ({ dist: Math.hypot(point.x - x, Math.hypot(point.y - y, point.z - z)), content: point.content })).
            reduce((cl, cur) => cur.dist < cl.dist ? cur : cl).content;
    }
}