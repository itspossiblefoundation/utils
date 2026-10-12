import {Style, StyleLoader, GenericStyleLoader} from "./styles";
import {Size, SizeLoader, GenericSizeLoader} from "./sizes";
import {IPFStyles} from "./styles/ipf";
import {BaseStyles} from "./styles/base";
import {TailwindStyles} from "./styles/tailwind";
import {ButtonSizes} from "./sizes/button";

export type {Style, StyleLoader, GenericStyleLoader, IPFStyles, BaseStyles, TailwindStyles}
export type {Size, SizeLoader, GenericSizeLoader, ButtonSizes}

export type Support = {
    Size: SizeLoader
    Style: StyleLoader
}

export class SupportLoader implements Support {
    Size: SizeLoader = new SizeLoader
    Style: StyleLoader = new StyleLoader
}

export default new SupportLoader