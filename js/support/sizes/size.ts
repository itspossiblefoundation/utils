export interface Size {
    text: string
    padX: string
    padY: string
    border: string
}

export type GenericSizeLoader<T extends string | number | symbol> = {
    [key in T]: Size
}

export abstract class AbstractSize implements Size {
    abstract text: string
    abstract padX: string
    abstract padY: string
    border: string = 'border-2';
}

