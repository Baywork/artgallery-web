export type ImageAggregate = {
    [fileIndex : number]: {
        filename : string,
        usedBy : number[]
    }
}