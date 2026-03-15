import { Stage } from "../core/stage";
import { RawEvent } from "../types/raw-events";

export class ParseStage implements Stage<string, RawEvent>{
    process(input: string): RawEvent {
        const data = JSON.parse(input)

        return {
            userId: data.userId, 
            speed: data.speed, 
            timestamp: data.timestamp
        }
    }
}