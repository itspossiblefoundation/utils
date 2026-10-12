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

export class SupportLoader implements Loader<'Size' | 'Style', SizeLoader | StyleLoader> {
    Size: SizeLoader = new SizeLoader
    Style: StyleLoader = new StyleLoader
}

export default new SupportLoader