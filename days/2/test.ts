import { assertEquals } from "@std/assert";
import {doTheThing} from "./part_1.ts";

Deno.test(function handlesSafe() {
    const data = `
1 3 6 7 9
`
    assertEquals(doTheThing(data), 1);
});

Deno.test(function handleUnsafeIncreaseMagnitude() {
    const data = `
1 2 7 8 9
`
    assertEquals(doTheThing(data), 0);
});

Deno.test(function handleUnsafePatternInversion() {
    const data = `
1 3 2 4 5
`
    assertEquals(doTheThing(data), 0);
});

Deno.test(function handleUnsafePatternDuplication() {
    const data = `
1 3 4 4 5
`
    assertEquals(doTheThing(data), 0);
});

Deno.test(function wtf() {
    const data = `
58 62 65 67 68 71
`
    assertEquals(doTheThing(data), 0);
})