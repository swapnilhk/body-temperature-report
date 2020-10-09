import {Data} from "./Data"

export interface State {
    tempScale: string,
    tempError: string,
    nameError: string,
    data: Data[],
    currTemp: number
}