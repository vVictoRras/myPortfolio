import {theme} from "./Theme.tsx";

type FontPropsType = {
    color?: string,
    family?: string,
    lineHeight?: number,
    weight?: number,
    Fmin?: number,
    Fmax?: number
}

export const font=({family, weight,color,lineHeight,Fmin,Fmax}:FontPropsType )=> `
  font-family: ${family || "Poppins"};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.font};
  line-height: ${lineHeight || 1.2};
  font-size: clamp( ${Fmin}px, calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px),  ${Fmax}px);
`