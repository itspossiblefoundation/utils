import {AbstractSize, GenericSizeLoader, Size} from "./size";

export class XSmall extends AbstractSize {
    text: string = 'text-xs'
    padX: string = 'px-5'
    padY: string = 'py-1'
    border: string = 'border-1'
}

export class Small extends AbstractSize {
    text: string = 'text-sm'
    padX: string = 'px-5'
    padY: string = 'py-1'

}

export class Medium extends AbstractSize {
    text: string = 'text-base'
    padX: string = 'px-6'
    padY: string = 'py-1.5'
}

export class Large extends AbstractSize {
    text: string = 'text-lg'
    padX: string = 'px-7'
    padY: string = 'py-1.5'
}

export class XLarge extends AbstractSize {
    text: string = 'text-xl'
    padX: string = 'px-8'
    padY: string = 'py-2'
}

export class XXLarge extends AbstractSize {
    text: string = 'text-2xl'
    padX: string = 'px-9'
    padY: string = 'py-2.5'
}

export class XXXLarge extends AbstractSize {
    text: string = 'text-3xl'
    padX: string = 'px-10'
    padY: string = 'py-3'
}

export enum ButtonSizes {
    Default = 'Default',
    XSmall = 'XSmall',
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
    XLarge = 'XLarge',
    XXLarge = 'XXLarge',
    XXXLarge = 'XXXLarge',
}

export class ButtonSizeLoader implements GenericSizeLoader<ButtonSizes> {
    Default: Size = new Medium
    XSmall: Size = new XSmall
    Small: Size = new Small
    Medium: Size = new Medium
    Large: Size = new Large
    XLarge: Size = new XLarge
    XXLarge: Size = new XXLarge
    XXXLarge: Size = new XXXLarge
}

export default new ButtonSizeLoader
