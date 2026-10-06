import {
    BackgroundColor,
    BorderColor,
    FillColor,
    ForegroundBorderColor,
    ForegroundColor, ForegroundFillColor, ForegroundTextColor,
    TextColor
} from "./color";

export interface Style {
    bg: BackgroundColor
    border: BorderColor
    text: TextColor
    fill: FillColor
    fg: ForegroundColor
    fgBorder: ForegroundBorderColor
    fgText: ForegroundTextColor
    fgFill: ForegroundFillColor

    color(): string

    fgColor(): string

    style(): string
}

export interface BaseStyleLoader {
    [key: string]: Style
}

export abstract class AbstractStyle implements Style {
    bg: BackgroundColor = new BackgroundColor()
    border: BorderColor = new BorderColor()
    text: TextColor = new TextColor()
    fill: FillColor = new FillColor()
    fg: ForegroundColor = new ForegroundColor()
    fgBorder: ForegroundBorderColor = new ForegroundBorderColor()
    fgText: ForegroundTextColor = new ForegroundTextColor()
    fgFill: ForegroundFillColor = new ForegroundFillColor()
    abstract color(): string
    abstract fgColor(): string

    style(): string {
        return `--style-color:${this.color()}; --style-fg-color:${this.fgColor()}`
    }
}
