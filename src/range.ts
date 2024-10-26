export function intRange(x: number): number[] {
    return Array.from({ length: Math.floor(x + 2) - Math.ceil(x - 2) + 1}, (_, i) => Math.ceil(x - 2) + i);
}