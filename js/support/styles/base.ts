import {AbstractStyle, BaseStyleLoader} from "./style";

export class DefaultStyle extends AbstractStyle {
    color(): string {
        return 'var(--color-primary)'
    }

    fgColor(): string {
        return 'var(--color-primary-foreground)'
    }
}

export class White extends AbstractStyle {
    color(): string {
        return '#ffffff'
    }

    fgColor(): string {
        return '#000000'
    }
}

export default {
    Default: new DefaultStyle,
    White: new White,
} satisfies BaseStyleLoader
