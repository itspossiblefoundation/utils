import {AbstractSize, BaseSizeLoader} from "@/support/sizes/size";

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

export default {
    Default: new Medium,
    XSmall: new XSmall,
    Small: new Small,
    Medium: new Medium,
    Large: new Large,
    XLarge: new XLarge,
    XXLarge: new XXLarge,
    XXXLarge: new XXXLarge,
} satisfies BaseSizeLoader
