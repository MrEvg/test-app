import { useRef, useCallback } from 'react';
import { Animated } from 'react-native';

export const useLikeAnimation = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const triggerAnimation = useCallback(
    (willLike: boolean) => {
      scale.setValue(1);
      rotate.setValue(0);

      Animated.parallel([
        Animated.sequence([
          Animated.spring(scale, {
            toValue: 1.3,
            friction: 3,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(rotate, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();

      return {
        scale,
        rotate: rotate.interpolate({
          inputRange: [0, 1],
          outputRange: willLike ? ['0deg', '360deg'] : ['0deg', '-360deg'],
        }),
      };
    },
    [scale, rotate],
  );

  return { triggerAnimation };
};
