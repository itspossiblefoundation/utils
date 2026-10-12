import {AbstractStyle, Style} from "./style";
import {Loader} from "../loader";

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

export enum BaseStyles {
    Default = 'Default',
    White = 'White',
}

export class BaseStyleLoader implements Loader<BaseStyles, Style> {
    Default: Style = new DefaultStyle
    White: Style = new White
}

export default new BaseStyleLoader