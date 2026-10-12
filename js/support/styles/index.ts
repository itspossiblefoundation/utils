import {Style} from "./style";
import * as Base from "./base"
import * as IPF from "./ipf";
import * as Tailwind from "./tailwind";
import {Loader} from "../loader";

export type {Style}

const Styles = {...Base.BaseStyles, ...Tailwind.TailwindStyles, ...IPF.IPFStyles}

export class StyleLoader implements Loader<keyof typeof Styles, Style> {
    Foundation: Style = new IPF.Foundation
    Mortgage: Style = new IPF.Mortgage
    Hub: Style = new IPF.Hub
    Funding: Style = new IPF.Funding
    Service: Style = new IPF.Service
    Commercial: Style = new IPF.Commercial
    Partner: Style = new IPF.Partner
    Dark: Style = new IPF.Dark
    Light: Style = new IPF.Light
    Indigo: Style = new IPF.Indigo
    Red: Style = new Tailwind.Red
    Orange: Style = new Tailwind.Orange
    Amber: Style = new Tailwind.Amber
    Yellow: Style = new Tailwind.Yellow
    Lime: Style = new Tailwind.Lime
    Green: Style = new Tailwind.Green
    Emerald: Style = new Tailwind.Emerald
    Teal: Style = new Tailwind.Teal
    Cyan: Style = new Tailwind.Cyan
    Sky: Style = new Tailwind.Sky
    Blue: Style = new Tailwind.Blue
    Violet: Style = new Tailwind.Violet
    Purple: Style = new Tailwind.Purple
    Fuchsia: Style = new Tailwind.Fuchsia
    Pink: Style = new Tailwind.Pink
    Rose: Style = new Tailwind.Rose
    Slate: Style = new Tailwind.Slate
    Gray: Style = new Tailwind.Gray
    Zinc: Style = new Tailwind.Zinc
    Neutral: Style = new Tailwind.Neutral
    Stone: Style = new Tailwind.Stone
    Taupe: Style = new Tailwind.Taupe
    Mauve: Style = new Tailwind.Mauve
    Mist: Style = new Tailwind.Mist
    Olive: Style = new Tailwind.Olive
    Default: Style = new Base.DefaultStyle
    White: Style = new Base.White
}

export default new StyleLoader