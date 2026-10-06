import {AbstractStyle, BaseStyleLoader} from "@/support/styles/style";

export class Foundation extends AbstractStyle {
    color(): string {
        return 'var(--color-foundation)'
    }

    fgColor(): string {
        return 'var(--color-foundation-foreground)'
    }
}

export class Mortgage extends AbstractStyle {
    color(): string {
        return 'var(--color-mortgage)'
    }

    fgColor(): string {
        return 'var(--color-mortgage-foreground)'
    }
}

export class Hub extends AbstractStyle {
    color(): string {
        return 'var(--color-hub)'
    }

    fgColor(): string {
        return 'var(--color-hub-foreground)'
    }
}

export class Funding extends AbstractStyle {
    color(): string {
        return 'var(--color-funding)'
    }

    fgColor(): string {
        return 'var(--color-funding-foreground)'
    }
}

export class Service extends AbstractStyle {
    color(): string {
        return 'var(--color-service)'
    }

    fgColor(): string {
        return 'var(--color-service-foreground)'
    }
}

export class Commercial extends AbstractStyle {
    color(): string {
        return 'var(--color-commercial)'
    }

    fgColor(): string {
        return 'var(--color-commercial-foreground)'
    }
}

export class Partner extends AbstractStyle {
    color(): string {
        return 'var(--color-partner)'
    }

    fgColor(): string {
        return 'var(--color-partner-foreground)'
    }
}

export class Dark extends AbstractStyle {
    color(): string {
        return 'var(--color-dark-gray)'
    }

    fgColor(): string {
        return 'var(--color-light-gray)'
    }
}

export class Light extends AbstractStyle {
    color(): string {
        return 'var(--color-light-gray)'
    }

    fgColor(): string {
        return 'var(--color-dark-gray)'
    }
}

export class Indigo extends AbstractStyle {
    color(): string {
        return 'var(--color-indigo-accent)'
    }

    fgColor(): string {
        return 'var(--color-indigo-200)'
    }
}

export default {
    Foundation: new Foundation,
    Mortgage: new Mortgage,
    Hub: new Hub,
    Funding: new Funding,
    Service: new Service,
    Commercial: new Commercial,
    Partner: new Partner,
    Dark: new Dark,
    Light: new Light,
    Indigo: new Indigo,
} satisfies BaseStyleLoader
