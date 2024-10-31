Hi, this is a simple package creating voronoi samplers.
The idea is that it you just give it points and values, and then when you use `sample` function, which gives you value of nearest point.

Example:
```
    const vs2d = new VoronoiSampler2D<string>();
    vs2d.addPoint(-1, -1, "-");
    vs2d.addPoint( 1,  1, "+");
    console.log(vs2d.sample(-0.5, -0.4)); // will be "-", because point closest to sampled one is (-1, -1), which has the value "-"
```

Example 2:
```
    const vg2d = new VoronoiGenerator2D(Math.random());
    let point = vg2d.sample(0.0, 0.0); // returns a point.
    // works by getting point on all round coords near sampled location, offseting each one by a random value, based on that's point position and voronoi seed, and returns nearest one
    console.log(`x: ${point.x}, y: ${point.y}`);
```

Example 3:
```
    cosnt vgNd = new VoronoiGeneratorND(3, Math.random()); // 3 dimensional voronoi generator
    let point = vgNd.sample([0, 0, 0]);
    console.log(`x: ${point[0]}, y: ${point[1]}, z: ${point[2]}`);
```
