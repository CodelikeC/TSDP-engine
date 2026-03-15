import { Pipeline } from "./pipeline"

export class Engine<I, O>{
    constructor(private pipeline: Pipeline<I, O> ){}

    runBatch(inputs: I[]): O[]{
        const results: O[] = []

        for (const input of inputs) {
            const result = this.pipeline.run(input)
            results.push(result)
        }

        return results
    }
}