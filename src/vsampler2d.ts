export class VoronoiSampler2D<T> {
    points: { x: number; y: number, content: T }[];
    constructor() {
        this.points = [];
    }

    addPoint(x: number, y: number, content: T): void {
        this.points.push({ x: x, y: y, content: content });
    }

    getPoints(): { x: number; y: number; content: T }[] {
        return [...this.points];
    }

    sample(x: number, y: number): T | null {
        if (!this.points.length) return null;
        return this.points.
            map(point => ({ dist: Math.hypot(point.x - x, point.y - y), content: point.content })).
            reduce((cl, cur) => cur.dist < cl.dist ? cur : cl).content;
    }
}