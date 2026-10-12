import {AbstractStyle, GenericStyleLoader, Style} from "./style";

export class Red extends AbstractStyle {
    color(): string {
        return 'var(--color-red-600)'
    }

    fgColor(): string {
        return 'var(--color-red-100)'
    }
}

export class Orange extends AbstractStyle {
    color(): string {
        return 'var(--color-orange-600)'
    }

    fgColor(): string {
        return 'var(--color-orange-100)'
    }
}

export class Amber extends AbstractStyle {
    color(): string {
        return 'var(--color-amber-600)'
    }

    fgColor(): string {
        return 'var(--color-amber-100)'
    }
}

export class Yellow extends AbstractStyle {
    color(): string {
        return 'var(--color-yellow-600)'
    }

    fgColor(): string {
        return 'var(--color-yellow-100)'
    }
}

export class Lime extends AbstractStyle {
    color(): string {
        return 'var(--color-lime-600)'
    }

    fgColor(): string {
        return 'var(--color-lime-100)'
    }
}

export class Green extends AbstractStyle {
    color(): string {
        return 'var(--color-green-600)'
    }

    fgColor(): string {
        return 'var(--color-green-100)'
    }
}

export class Emerald extends AbstractStyle {
    color(): string {
        return 'var(--color-emerald-600)'
    }

    fgColor(): string {
        return 'var(--color-emerald-100)'
    }
}

export class Teal extends AbstractStyle {
    color(): string {
        return 'var(--color-teal-600)'
    }

    fgColor(): string {
        return 'var(--color-teal-100)'
    }
}

export class Cyan extends AbstractStyle {
    color(): string {
        return 'var(--color-cyan-600)'
    }

    fgColor(): string {
        return 'var(--color-cyan-100)'
    }
}

export class Sky extends AbstractStyle {
    color(): string {
        return 'var(--color-sky-600)'
    }

    fgColor(): string {
        return 'var(--color-sky-100)'
    }
}

export class Blue extends AbstractStyle {
    color(): string {
        return 'var(--color-blue-600)'
    }

    fgColor(): string {
        return 'var(--color-blue-100)'
    }
}

export class Violet extends AbstractStyle {
    color(): string {
        return 'var(--color-violet-600)'
    }

    fgColor(): string {
        return 'var(--color-violet-100)'
    }
}

export class Purple extends AbstractStyle {
    color(): string {
        return 'var(--color-purple-600)'
    }

    fgColor(): string {
        return 'var(--color-purple-100)'
    }
}

export class Fuchsia extends AbstractStyle {
    color(): string {
        return 'var(--color-fuchsia-600)'
    }

    fgColor(): string {
        return 'var(--color-fuchsia-100)'
    }
}

export class Pink extends AbstractStyle {
    color(): string {
        return 'var(--color-pink-600)'
    }

    fgColor(): string {
        return 'var(--color-pink-100)'
    }
}

export class Rose extends AbstractStyle {
    color(): string {
        return 'var(--color-rose-600)'
    }

    fgColor(): string {
        return 'var(--color-rose-100)'
    }
}

export class Slate extends AbstractStyle {
    color(): string {
        return 'var(--color-slate-600)'
    }

    fgColor(): string {
        return 'var(--color-slate-100)'
    }
}

export class Gray extends AbstractStyle {
    color(): string {
        return 'var(--color-gray-600)'
    }

    fgColor(): string {
        return 'var(--color-gray-100)'
    }
}

export class Zinc extends AbstractStyle {
    color(): string {
        return 'var(--color-zinc-600)'
    }

    fgColor(): string {
        return 'var(--color-zinc-100)'
    }
}

export class Neutral extends AbstractStyle {
    color(): string {
        return 'var(--color-neutral-600)'
    }

    fgColor(): string {
        return 'var(--color-neutral-100)'
    }
}

export class Stone extends AbstractStyle {
    color(): string {
        return 'var(--color-stone-600)'
    }

    fgColor(): string {
        return 'var(--color-stone-100)'
    }
}

export class Taupe extends AbstractStyle {
    color(): string {
        return 'var(--color-taupe-600)'
    }

    fgColor(): string {
        return 'var(--color-taupe-100)'
    }
}

export class Mauve extends AbstractStyle {
    color(): string {
        return 'var(--color-mauve-600)'
    }

    fgColor(): string {
        return 'var(--color-mauve-100)'
    }
}

export class Mist extends AbstractStyle {
    color(): string {
        return 'var(--color-mist-600)'
    }

    fgColor(): string {
        return 'var(--color-mist-100)'
    }
}

export class Olive extends AbstractStyle {
    color(): string {
        return 'var(--color-olive-600)'
    }

    fgColor(): string {
        return 'var(--color-olive-100)'
    }
}

export enum TailwindStyles {
    Red = 'Red',
    Orange = 'Orange',
    Amber = 'Amber',
    Yellow = 'Yellow',
    Lime = 'Lime',
    Green = 'Green',
    Emerald = 'Emerald',
    Teal = 'Teal',
    Cyan = 'Cyan',
    Sky = 'Sky',
    Blue = 'Blue',
    Violet = 'Violet',
    Purple = 'Purple',
    Fuchsia = 'Fuchsia',
    Pink = 'Pink',
    Rose = 'Rose',
    Slate = 'Slate',
    Gray = 'Gray',
    Zinc = 'Zinc',
    Neutral = 'Neutral',
    Stone = 'Stone',
    Taupe = 'Taupe',
    Mauve = 'Mauve',
    Mist = 'Mist',
    Olive = 'Olive',
}

export class TailwindStyleLoader implements GenericStyleLoader<TailwindStyles> {
    Red: Style = new Red
    Orange: Style = new Orange
    Amber: Style = new Amber
    Yellow: Style = new Yellow
    Lime: Style = new Lime
    Green: Style = new Green
    Emerald: Style = new Emerald
    Teal: Style = new Teal
    Cyan: Style = new Cyan
    Sky: Style = new Sky
    Blue: Style = new Blue
    Violet: Style = new Violet
    Purple: Style = new Purple
    Fuchsia: Style = new Fuchsia
    Pink: Style = new Pink
    Rose: Style = new Rose
    Slate: Style = new Slate
    Gray: Style = new Gray
    Zinc: Style = new Zinc
    Neutral: Style = new Neutral
    Stone: Style = new Stone
    Taupe: Style = new Taupe
    Mauve: Style = new Mauve
    Mist: Style = new Mist
    Olive: Style = new Olive
}

export default new TailwindStyleLoader
