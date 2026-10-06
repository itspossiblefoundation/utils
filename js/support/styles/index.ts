import {Style, BaseStyleLoader} from "./style";
import IPF from "./ipf";
import Tailwind from "./tailwind";
import BaseStyles from "./base"

export type {Style, BaseStyleLoader}

export type StyleLoader = {
    [style in (keyof typeof BaseStyles) | (keyof typeof IPF) | (keyof typeof Tailwind)]: Style
}

export default {
    ...BaseStyles,
    ...IPF,
    ...Tailwind,
} satisfies StyleLoader
