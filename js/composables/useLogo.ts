import {ComponentProps, StyleName} from "../components/components";
import {load, Style} from "../support";

export type UseLogoReturn = {
    text: (props: ComponentProps) => Fill,
    color: (props: ComponentProps) => Fill,
}

const StyleDict: Record<StyleName, Style> = {
    foundation: load.style.Foundation,
    funding: load.style.Funding,
    hub: load.style.Hub,
    mortgage: load.style.Mortgage,
    partner: load.style.Partner,
    service: load.style.Service
}

export interface Fill {
    style: Style
    class: string,
    css: string,
}

export function useLogo(defaults?: ComponentProps): UseLogoReturn {
    function text(props: ComponentProps): Fill {
        let dark: boolean = props.dark ?? defaults?.dark ?? false
        let style: Style = dark ? load.style.Light : load.style.Dark

        if(props.monoColor === true) {
            return color(props)
        }

        return {
            style: style,
            class: style.fill.opacity(props.opacity ?? defaults?.opacity ?? 100),
            css: style.style()
        }
    }

    function color(props: ComponentProps): Fill {
        if (props.style !== undefined) {
            return {
                style: props.style,
                class: props.style.fill.opacity(props.opacity ?? defaults?.opacity ?? 100),
                css: props.style.style()
            }
        }

        if (props.mono && !props.monoColor) {
            return text(props)
        }

        let color: StyleName = props.color ?? defaults?.color ?? 'foundation'
        let style: Style = StyleDict[color]

        return {
            style: style,
            class: style.fill.opacity(props.opacity ?? defaults?.opacity ?? 100),
            css: style.style()
        }
    }

    return {
        text,
        color,
    }
}