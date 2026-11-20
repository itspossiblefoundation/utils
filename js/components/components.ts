import {Style} from "../support";

export type StyleName = 'foundation' | 'hub' | 'service' | 'mortgage' | 'funding' | 'partner'

export type PropType = boolean | number | StyleName | Style

export interface ComponentProps {
    dark?: boolean
    mono?: boolean
    monoColor?: boolean
    color?: StyleName
    style?: Style
    opacity?: number
}

export interface Props extends ComponentProps {
    dark: boolean
    mono: boolean
    monoColor: boolean
    color: StyleName
    style: Style
    opacity: number
}