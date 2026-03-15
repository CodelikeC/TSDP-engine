import { Stage } from "../core/stage"
import { FeatureVector } from "../types/feature-vector"
import { LabeledData } from "../types/labeled-data"

export class LabelStage implements Stage<FeatureVector, LabeledData> {

    process(input: FeatureVector): LabeledData {

        const label = input.speed > 100
            ? "dangerous"
            : "safe"

        return {
            features: input,
            label
        }
    }
}