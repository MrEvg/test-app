import { ImageBackground, StyleSheet, View } from 'react-native';
import { MainButton } from '@shared/ui';

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
      <View style={styles.buttonContainer}>
        <MainButton title="Start" onPress={onPress} />
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '8%',
  },
});
