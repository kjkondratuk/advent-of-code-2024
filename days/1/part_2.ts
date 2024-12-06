// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
import {calcDiff, calculateFuncSum, data} from "./part_1.ts";

if (import.meta.main) {
    const result : number = calculateFuncSum(data, calcSimilarity)
    console.log(`Result : ${result}`)
}

export function calcSimilarity(first: Array<number>, second: Array<number>, idx: number) : number {
    let ct = 0;
    second.forEach(i => {
        if (first[idx] === i) {
            ct++
        }
    })
    return first[idx] * ct
}