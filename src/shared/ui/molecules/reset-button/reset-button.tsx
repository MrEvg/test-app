import { Animated, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void;
};

export const ResetButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <Animated.View style={styles.container}>
      <Icon name="trash-outline" size={30} color="#ffffff" />
    </Animated.View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -15,
    left: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(125,125,125,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
