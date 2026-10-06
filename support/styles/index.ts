import {Style, BaseStyleLoader} from "@/support/styles/style";
import IPF from "@/support/styles/ipf";
import Tailwind from "@/support/styles/tailwind";
import BaseStyles from "@/support/styles/base"

export type {Style, BaseStyleLoader}

export type StyleLoader = {
    [style in (keyof typeof BaseStyles) | (keyof typeof IPF) | (keyof typeof Tailwind)]: Style
}

export default {
    ...BaseStyles,
    ...IPF,
    ...Tailwind,
} satisfies StyleLoader
