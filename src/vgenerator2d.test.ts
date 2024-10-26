import { VoronoiGenerator2D } from "./vgenerator2d";

// TODO: do not use random in tests
test('vg2d seeding', () => {
    const seed: number = Math.random();
    const vg2d0 = new VoronoiGenerator2D(seed);
    const vg2d1 = new VoronoiGenerator2D(seed);
    for (let i = 0; i < 1024; i++) {
        const x = (Math.random() * 1024) - 512;
        const y = (Math.random() * 1024) - 512;
        expect(vg2d0.sample(x, y)).toEqual(vg2d1.sample(x, y));
    }
});