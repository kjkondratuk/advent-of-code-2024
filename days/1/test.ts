import { assertEquals } from "@std/assert";
import {calcDiff, calculateFuncSum} from "./part_1.ts";
import {calcSimilarity} from "./part_2.ts";

Deno.test(function negativeDiffSums() {
    const data: string = `
1   -2
3   1
2   -1
-100   10
`
    assertEquals(calculateFuncSum(data, calcDiff), 108);
});

Deno.test(function example() {
    const data: string = `
3   4
4   3
2   5
1   3
3   9
3   3
`
    assertEquals(calculateFuncSum(data, calcDiff), 11);
});

Deno.test(function negativeDiffSums() {
    const data: string = `
1   -2
3   1
2   -1
-100   10
`
    assertEquals(calculateFuncSum(data, calcSimilarity), 1);
});

Deno.test(function example() {
    const data: string = `
3   4
4   3
2   5
1   3
3   9
3   3
`
    assertEquals(calculateFuncSum(data, calcSimilarity), 31);
});