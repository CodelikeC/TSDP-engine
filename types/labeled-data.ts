import { FeatureVector } from "./feature-vector";

export interface LabeledData{
    features : FeatureVector, 
    label:"Safe" | "dangerous"
}