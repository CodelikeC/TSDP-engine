import {Stage} from "./stage"

export class Pipeline<I, O>{
    private stages: Stage<any, any>[] = [] 

    addStage<A, B>(stage: Stage<A, B>): Pipeline<I, B> {
        this.stages.push(stage)
        return this as unknown as Pipeline<I, B>
    }

    run(input: I): O {
        let data : any = input
        for (const stage of this.stages){
            data = stage.process(data)
        }

        return data as O 
    }
}