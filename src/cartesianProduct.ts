export function acp2d(ar: number[][]): number[][] {
    let tmp: number[][] = [];
    ar.forEach(el => {
        tmp.push([...el]);
    });
    return tmp;
}

// i kinda have no idea what it does, even tho i wrote it
export function cartesianProduct(vectors: number[][]): number[][] {
    let points: number[][] = [];
    vectors.splice(0, 1)[0]?.forEach(el => points.push([el]));
    vectors.forEach((el) => {
        let pointsCopy = acp2d(points);
        points = [];
        el.forEach(c => {
            let tmp = acp2d(pointsCopy);
            tmp.forEach(el2 => {
                el2.push(c);
            });
            points.push(...acp2d(tmp));
        });
    });
    return points;
}