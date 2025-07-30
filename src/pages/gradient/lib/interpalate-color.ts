import { TRGBColor } from '../types';

export const interpolateColor = (
  color1: TRGBColor,
  color2: TRGBColor,
  factor: number,
): TRGBColor => {
  const smoothFactor =
    factor < 0.5 ? 2 * factor * factor : 1 - Math.pow(-2 * factor + 2, 2) / 2;

  return {
    r: Math.round(color1.r + smoothFactor * (color2.r - color1.r)),
    g: Math.round(color1.g + smoothFactor * (color2.g - color1.g)),
    b: Math.round(color1.b + smoothFactor * (color2.b - color1.b)),
  };
};
