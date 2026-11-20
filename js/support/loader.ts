export type Loader<K extends string | number | symbol, T> = {
    [key in K]: T
}