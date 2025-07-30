import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Gradient } from './gradient';
import { interpolateColor } from '../lib';
import { GRADIENT_COLORS, SEGMENTS } from '../constants';

export const GradientConnector = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: SEGMENTS }, (_, index) => {
      const globalFactor = index / (SEGMENTS - 1);
      const colorIndex = Math.min(
        Math.floor(globalFactor * (GRADIENT_COLORS.length - 1)),
        GRADIENT_COLORS.length - 2,
      );
      const localFactor = (globalFactor * (GRADIENT_COLORS.length - 1)) % 1;

      const color = interpolateColor(
        GRADIENT_COLORS[colorIndex],
        GRADIENT_COLORS[colorIndex + 1],
        localFactor,
      );

      return `rgb(${color.r},${color.g},${color.b})`;
    });

    setColors(generated);
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => setIsVisible(false);
    }, []),
  );

  const handleToggle = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <Gradient colors={colors} isVisible={isVisible} onToggle={handleToggle} />
  );
};
