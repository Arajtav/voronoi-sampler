import { VoronoiSampler3D } from "./vsampler3d";

test('vs3d no points', () => {
    const vs3d = new VoronoiSampler3D<string>();
    expect(vs3d.sample(0, 0, 0)).toBeNull();
});

test('vs3d one point', () => {
    const vs3d = new VoronoiSampler3D<string>();
    vs3d.addPoint(0, 0, 0, "test");
    expect(vs3d.sample(0, 0, 0)).toBe("test");
});

test('vs3d many points', () => {
    const vs3d = new VoronoiSampler3D<string>();
    vs3d.addPoint(-2, -2, -2, "a");
    vs3d.addPoint(2, 2, -3, "b");
    vs3d.addPoint(1, -1, 1, "c");
    expect(vs3d.sample(0, 0, 0)).toBe("c");
});

test('vs3d getPoints read', () => {
    const vs3d = new VoronoiSampler3D<string>();
    expect(vs3d.getPoints()).toEqual([]);
});

test('vs3d getPoints modify', () => {
    const vs3d = new VoronoiSampler3D<string>();
    vs3d.getPoints().push({ x: 0, y: 0, z: 0, content: "" });
    expect(vs3d.getPoints()).toEqual([]);
});