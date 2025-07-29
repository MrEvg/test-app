import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  imageUri: string | null;
  onPress: () => void;
  showButton: boolean;
};

export const UploadImage = ({ imageUri, onPress, showButton }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Image
          source={
            imageUri
              ? { uri: imageUri }
              : require('@shared/ui/static/placeholder.png')
          }
          style={styles.image}
          resizeMode={imageUri ? 'contain' : 'cover'}
        />
      </TouchableOpacity>

      {showButton && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Upload image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F4F4F',
  },
  imageContainer: {
    height: 450,
    width: 280,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    height: 60,
    width: 320,
    marginTop: 50,
    backgroundColor: '#4e7ae4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 26,
  },
});
