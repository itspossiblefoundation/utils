import {AbstractStyle, BaseStyleLoader} from "@/support/styles/style";

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

export default {
    Red: new Red,
    Orange: new Orange,
    Amber: new Amber,
    Yellow: new Yellow,
    Lime: new Lime,
    Green: new Green,
    Emerald: new Emerald,
    Teal: new Teal,
    Cyan: new Cyan,
    Sky: new Sky,
    Blue: new Blue,
    Violet: new Violet,
    Purple: new Purple,
    Fuchsia: new Fuchsia,
    Pink: new Pink,
    Rose: new Rose,
    Slate: new Slate,
    Gray: new Gray,
    Zinc: new Zinc,
    Neutral: new Neutral,
    Stone: new Stone,
    Taupe: new Taupe,
    Mauve: new Mauve,
    Mist: new Mist,
    Olive: new Olive,
} satisfies BaseStyleLoader
