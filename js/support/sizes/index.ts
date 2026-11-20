import {Size} from "./size";
import * as Button from './button'
import {Loader} from "../loader";

export type {Size}

const Sizes = {...Button.ButtonSizes}

export class SizeLoader implements Loader<keyof typeof Sizes, Size> {
    Default: Size = new Button.Medium
    XSmall: Size = new Button.XSmall
    Small: Size = new Button.Small
    Medium: Size = new Button.Medium
    Large: Size = new Button.Large
    XLarge: Size = new Button.XLarge
    XXLarge: Size = new Button.XXLarge
    XXXLarge: Size = new Button.XXXLarge
}

export default new SizeLoader
