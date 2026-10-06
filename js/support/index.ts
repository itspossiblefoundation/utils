import {StyleLoader, default as Style} from "./styles";
import {SizeLoader, default as Size} from "./sizes";

export type SupportLoader = {
    size: SizeLoader,
    style: StyleLoader
}

export const Loader: SupportLoader = {
    size: Size,
    style: Style,
}

export default Loader