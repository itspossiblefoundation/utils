import {Size, GenericSizeLoader} from "./size";
import * as Button from './button'

export type {Size, GenericSizeLoader}

const Sizes = {...Button.ButtonSizes}
type AllSizes = keyof typeof Sizes

export class SizeLoader implements GenericSizeLoader<AllSizes> {
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
