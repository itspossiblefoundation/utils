export interface Size {
    text: string
    padX: string
    padY: string
    border: string
}

export type BaseSizeLoader = {
    [key: string]: Size
}

export abstract class AbstractSize implements Size {
    abstract text: string
    abstract padX: string
    abstract padY: string
    border: string = 'border-2';
}

