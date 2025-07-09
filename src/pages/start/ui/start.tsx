import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IStart {
  onPress: () => void;
}

export const Start = ({ onPress }: IStart) => {
  return (
    <ImageBackground
      source={require('@shared/ui/static/backImage.jpg')}
      style={styles.background}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          activeOpacity={0.75}
        >
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.6,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '8%',
  },
  text: {
    fontSize: 22,
    color: 'white',
    letterSpacing: 3,
  },
  button: {
    backgroundColor: '#EB5757',
    borderRadius: 12,
    width: '92%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
