import { Stage } from "../core/stage";
import { CleanEvent } from "../types/clean-events";
import { FeatureVector } from "../types/feature-vector";

export class FeatureVector implements Stage<CleanEvent, FeatureVector>{
    process(input: CleanEvent): FeatureVector {
        const acceleration = input.speed / 10

        return {
            speed: input.speed,
            acceleration
        }
    }
}