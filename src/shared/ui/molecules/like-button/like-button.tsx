import React from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  isLiked: boolean;
  onPress: () => Promise<{
    scale: Animated.Value;
    rotate: Animated.AnimatedInterpolation<string>;
  }>;
};

export const LikeButton = ({ isLiked, onPress }: Props) => {
  const [animation, setAnimation] = React.useState<{
    scale?: Animated.Value;
    rotate?: Animated.AnimatedInterpolation<string>;
  }>({});

  const handlePress = async () => {
    const anim = await onPress();
    setAnimation(anim);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              { scale: animation.scale || 1 },
              { rotate: animation.rotate || '0deg' },
            ],
          },
        ]}
      >
        <Icon
          name={isLiked ? 'heart' : 'heart-outline'}
          size={30}
          color={isLiked ? '#ff3b30' : '#ffffff'}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(125,125,125,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
