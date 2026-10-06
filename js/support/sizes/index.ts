import {Size, BaseSizeLoader} from "./size";
import ButtonSizes from "./button"

export type {Size, BaseSizeLoader}

export type SizeLoader = {
    [size in (keyof typeof ButtonSizes)]: Size
}

export default {
    ...ButtonSizes,
} satisfies SizeLoader
