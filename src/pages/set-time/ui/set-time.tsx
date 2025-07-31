import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  onPress: () => void;
  onReset: () => void;
  buttonText: string;
  showReset: boolean;
};

export const SetTime = ({ onPress, onReset, buttonText, showReset }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      {showReset && (
        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetButtonText}>Clear</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4F4F4F',
  },
  button: {
    height: 60,
    width: 320,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4e7ae4',
    marginTop: 100,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 26,
  },
  resetButton: {
    marginTop: 20,
    height: 50,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4444',
  },
  resetButtonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
