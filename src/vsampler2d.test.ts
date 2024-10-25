import { VoronoiSampler2D } from "./vsampler2d";

test('vs2d no points', () => {
    const vs2d = new VoronoiSampler2D<string>();
    expect(vs2d.sample(0, 0)).toBeNull();
});

test('vs2d one point', () => {
    const vs2d = new VoronoiSampler2D<string>();
    vs2d.addPoint(0, 0, "test");
    expect(vs2d.sample(0, 0)).toBe("test");
});

test('vs2d many points', () => {
    const vs2d = new VoronoiSampler2D<string>();
    vs2d.addPoint(-1, -1, "a");
    vs2d.addPoint(1, 1, "b");
    vs2d.addPoint(3, -2, "c");
    expect(vs2d.sample(0, -1)).toBe("a");
});

test('vs2d getPoints read', () => {
    const vs2d = new VoronoiSampler2D<string>();
    expect(vs2d.getPoints()).toEqual([]);
});

test('vs2d getPoints modify', () => {
    const vs2d = new VoronoiSampler2D<string>();
    vs2d.getPoints().push({ x: 0, y: 0, content: "" });
    expect(vs2d.getPoints()).toEqual([]);
})