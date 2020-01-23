export interface IRawData {
    name: string,
    lowerStart: number,
    lowerTop1: number,
    lowerTop2: number,
    lowerEnd: number,
    upperStart: number,
    upperTop1: number,
    upperTop2: number,
    upperEnd: number
}


export interface IUpperData {
    upperStart: number,
    upperTop1: number,
    upperTop2: number,
    upperEnd: number
}

export interface IFuzzyArea {
    isFuzzy: boolean,
    startPoint?: number,
    fuzzyAreaLowWidth?: number
    fuzzyAreaMediumAndHighWidth?: number
} 

