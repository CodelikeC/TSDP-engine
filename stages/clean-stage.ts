import { Stage } from "../core/stage";
import { RawEvent } from "../types/raw-events";

import { CleanEvent } from "../types/clean-events";

export class CleanStage implements Stage<RawEvent, CleanEvent>{
    process(input: RawEvent): CleanEvent {
        return {
            userId: Number(input.userId), 
            speed: input.speed?? 0, 
            timestamp: Date.parse(input.timestamp)
        }
    }
}