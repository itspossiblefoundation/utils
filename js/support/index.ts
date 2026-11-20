import {Style, StyleLoader} from "./styles";
import {Size, SizeLoader} from "./sizes";
import {IPFStyles} from "./styles/ipf";
import {BaseStyles} from "./styles/base";
import {TailwindStyles} from "./styles/tailwind";
import {ButtonSizes} from "./sizes/button";
import {Loader} from "./loader";

export type {Style, StyleLoader, IPFStyles, BaseStyles, TailwindStyles}
export type {Size, SizeLoader, ButtonSizes}
export type {Loader}

enum Support {
    size = 'size',
    style = 'style',
    Size = 'Size',
    Style = 'Style',
}

export class SupportLoader implements Loader<Support, SizeLoader | StyleLoader> {
    size: SizeLoader = new SizeLoader
    style: StyleLoader = new StyleLoader
    Size: SizeLoader = new SizeLoader
    Style: StyleLoader = new StyleLoader
}

export const load: SupportLoader = new SupportLoader

export default load