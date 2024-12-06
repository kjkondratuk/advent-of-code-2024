import { assertEquals } from "@std/assert";
import {calculateDiffSum} from "./main.ts";

Deno.test(function negativeDiffSums() {
    const data: string = `
1   -2
3   1
2   -1
-100   10
`
    assertEquals(calculateDiffSum(data), 108);
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
    assertEquals(calculateDiffSum(data), 11);
});