export interface CssColor {
    css: string

    hover(opacity: number): string
    opacity(opacity: number): string
}


export abstract class AbstractColor implements CssColor {
    abstract css: string

    abstract hover(opacity: number): string
    abstract opacity(opacity: number): string

    toString(): string {
        return this.css
    }
}

export class FillColor extends AbstractColor {
    css: string = 'fill-[var(--style-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:fill-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:fill-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:fill-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:fill-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:fill-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:fill-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:fill-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:fill-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:fill-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:fill-[var(--style-color)]/90'
        }
        return 'hover:fill-[var(--style-color)]'
    }
    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'fill-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'fill-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'fill-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'fill-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'fill-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'fill-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'fill-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'fill-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'fill-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'fill-[var(--style-color)]/90'
        }
        return 'fill-[var(--style-color)]'
    }
}

export class ForegroundFillColor extends AbstractColor {
    css: string = 'fill-[var(--style-fg-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:fill-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:fill-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:fill-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:fill-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:fill-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:fill-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:fill-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:fill-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:fill-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:fill-[var(--style-fg-color)]/90'
        }
        return 'hover:fill-[var(--style-fg-color)]'
    }

    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'fill-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'fill-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'fill-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'fill-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'fill-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'fill-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'fill-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'fill-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'fill-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'fill-[var(--style-fg-color)]/90'
        }
        return 'fill-[var(--style-fg-color)]'
    }
}

export class BackgroundColor extends AbstractColor {
    css: string = 'bg-[var(--style-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:bg-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:bg-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:bg-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:bg-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:bg-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:bg-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:bg-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:bg-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:bg-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:bg-[var(--style-color)]/90'
        }
        return 'hover:bg-[var(--style-color)]'
    }

    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'bg-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'bg-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'bg-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'bg-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'bg-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'bg-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'bg-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'bg-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'bg-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'bg-[var(--style-color)]/90'
        }
        return 'bg-[var(--style-color)]'
    }
}

export class ForegroundColor extends AbstractColor {
    css: string = 'bg-[var(--style-fg-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:bg-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:bg-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:bg-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:bg-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:bg-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:bg-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:bg-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:bg-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:bg-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:bg-[var(--style-fg-color)]/90'
        }
        return 'hover:bg-[var(--style-fg-color)]'
    }

    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'bg-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'bg-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'bg-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'bg-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'bg-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'bg-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'bg-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'bg-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'bg-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'bg-[var(--style-fg-color)]/90'
        }
        return 'bg-[var(--style-fg-color)]'
    }
}

export class BorderColor extends AbstractColor {
    css: string = 'border-[var(--style-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:border-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:border-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:border-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:border-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:border-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:border-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:border-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:border-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:border-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:border-[var(--style-color)]/90'
        }
        return 'hover:border-[var(--style-color)]'
    }

    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'border-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'border-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'border-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'border-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'border-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'border-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'border-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'border-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'border-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'border-[var(--style-color)]/90'
        }
        return 'border-[var(--style-color)]'
    }
}

export class ForegroundBorderColor extends AbstractColor {
    css: string = 'border-[var(--style-fg-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:border-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:border-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:border-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:border-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:border-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:border-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:border-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:border-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:border-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:border-[var(--style-fg-color)]/90'
        }
        return 'hover:border-[var(--style-fg-color)]'
    }

    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'border-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'border-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'border-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'border-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'border-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'border-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'border-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'border-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'border-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'border-[var(--style-fg-color)]/90'
        }
        return 'border-[var(--style-fg-color)]'
    }
}

export class TextColor extends AbstractColor {
    css: string = 'text-[var(--style-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:text-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:text-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:text-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:text-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:text-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:text-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:text-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:text-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:text-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:text-[var(--style-color)]/90'
        }
        return 'hover:text-[var(--style-color)]'
    }

    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'text-[var(--style-color)]/5'
        }
        if (opacity <= 10) {
            return 'text-[var(--style-color)]/10'
        }
        if (opacity <= 20) {
            return 'text-[var(--style-color)]/20'
        }
        if (opacity <= 30) {
            return 'text-[var(--style-color)]/30'
        }
        if (opacity <= 40) {
            return 'text-[var(--style-color)]/40'
        }
        if (opacity <= 50) {
            return 'text-[var(--style-color)]/50'
        }
        if (opacity <= 60) {
            return 'text-[var(--style-color)]/60'
        }
        if (opacity <= 70) {
            return 'text-[var(--style-color)]/70'
        }
        if (opacity <= 80) {
            return 'text-[var(--style-color)]/80'
        }
        if (opacity <= 90) {
            return 'text-[var(--style-color)]/90'
        }
        return 'text-[var(--style-color)]'
    }
}

export class ForegroundTextColor extends AbstractColor {
    css: string = 'text-[var(--style-fg-color)]'

    hover(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'hover:text-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'hover:text-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'hover:text-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'hover:text-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'hover:text-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'hover:text-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'hover:text-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'hover:text-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'hover:text-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'hover:text-[var(--style-fg-color)]/90'
        }
        return 'hover:text-[var(--style-fg-color)]'
    }

    opacity(opacity: number = 100): string {
        if (opacity <= 5) {
            return 'text-[var(--style-fg-color)]/5'
        }
        if (opacity <= 10) {
            return 'text-[var(--style-fg-color)]/10'
        }
        if (opacity <= 20) {
            return 'text-[var(--style-fg-color)]/20'
        }
        if (opacity <= 30) {
            return 'text-[var(--style-fg-color)]/30'
        }
        if (opacity <= 40) {
            return 'text-[var(--style-fg-color)]/40'
        }
        if (opacity <= 50) {
            return 'text-[var(--style-fg-color)]/50'
        }
        if (opacity <= 60) {
            return 'text-[var(--style-fg-color)]/60'
        }
        if (opacity <= 70) {
            return 'text-[var(--style-fg-color)]/70'
        }
        if (opacity <= 80) {
            return 'text-[var(--style-fg-color)]/80'
        }
        if (opacity <= 90) {
            return 'text-[var(--style-fg-color)]/90'
        }
        return 'text-[var(--style-fg-color)]'
    }
}













