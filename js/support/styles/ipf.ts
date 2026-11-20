import {AbstractStyle, Style} from "./style";
import {Loader} from "../loader";

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

export enum IPFStyles {
    Foundation = 'Foundation',
    Mortgage = 'Mortgage',
    Hub = 'Hub',
    Funding = 'Funding',
    Service = 'Service',
    Commercial = 'Commercial',
    Partner = 'Partner',
    Dark = 'Dark',
    Light = 'Light',
    Indigo = 'Indigo'
}


export class IPFStyleLoader implements Loader<IPFStyles, Style> {
    Foundation: Style = new Foundation
    Mortgage: Style = new Mortgage
    Hub: Style = new Hub
    Funding: Style = new Funding
    Service: Style = new Service
    Commercial: Style = new Commercial
    Partner: Style = new Partner
    Dark: Style = new Dark
    Light: Style = new Light
    Indigo: Style = new Indigo
}

export default new IPFStyleLoader