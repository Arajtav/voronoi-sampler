import { VoronoiGeneratorND } from "./vgeneratorNd";

test('vgNd less than 1 dimension', () => {
    expect(() => new VoronoiGeneratorND(0, 0)).toThrow();
});

test('vgNd fractional dimensions', () => {
    expect(() => new VoronoiGeneratorND(2.5, 0)).toThrow();
});

// TODO: do not use random in tests
test('vgNd seeding', () => {
    const seed: number = Math.random();
    const vgNd0 = new VoronoiGeneratorND(2, seed);
    const vgNd1 = new VoronoiGeneratorND(2, seed);
    for (let i = 0; i < 1024; i++) {
        const x = (Math.random() * 1024) - 512;
        const y = (Math.random() * 1024) - 512;
        expect(vgNd0.sample([x, y])).toEqual(vgNd1.sample([x, y]));
    }
});