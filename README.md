Hi, this is a simple package creating voronoi samplers.
The idea is that it you just give it points and values, and then when you use `sample` function, which gives you value of nearest point.

Example:
```
    const vs2d = new VoronoiSampler2D<string>();
    vs2d.addPoint(-1, -1, "-");
    vs2d.addPoint( 1,  1, "+");
    console.log(vs2d.sample(-0.5, -0.4)); // will be "-", because point closest to sampled one is (-1, -1), which has value "-"
```