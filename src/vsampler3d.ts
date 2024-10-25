export class VoronoiSampler3D<T> {
    points: { x: number, y: number, z: number, content: T }[];
    constructor() {
        this.points = [];
    }

    addPoint(x: number, y: number, z: number, content: T): void {
        this.points.push({ x: x, y: y, z: z, content: content });
    }

    getPoints(): { x: number, y: number, z: number, content: T }[] {
        return [...this.points];
    }

    sample(x: number, y: number, z: number): T | null {
        if (!this.points.length) return null;
        return this.points.
            map(point => ({ dist: Math.hypot(point.x - x, Math.hypot(point.y - y, point.z - z)), content: point.content })).
            reduce((cl, cur) => cur.dist < cl.dist ? cur : cl).content;
    }
}