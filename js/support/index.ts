import {StyleLoader, Style, default as Styles} from "./styles";
import {SizeLoader, Size, default as Sizes} from "./sizes";

export type {StyleLoader, SizeLoader}
export type {Style, Size}

export type SupportLoader = {
    size: SizeLoader,
    style: StyleLoader
}

export const Loader: SupportLoader = {
    size: Sizes,
    style: Styles,
}

export default Loader