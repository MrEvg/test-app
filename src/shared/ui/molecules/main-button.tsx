import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IMainButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const MainButton = ({
  title,
  onPress,
  disabled = false,
}: IMainButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: 'white',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#EB5757',
    borderRadius: 12,
    width: '92%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
