import{
    Stage 
} from "../core/stage"

import { CleanEvent } from "../types/clean-events"

export class TransformStage implements Stage<CleanEvent, CleanEvent>{
    process(input: CleanEvent):CleanEvent{
        const NormalizedSpeed = Math.max(0, input.speed) 

        return {
            ...input, 
            speed: NormalizedSpeed
        }
    }
}