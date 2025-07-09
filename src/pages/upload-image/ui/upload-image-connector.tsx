import { StyleSheet, Text, View } from 'react-native';

export const UploadImageConnector = () => {
  return (
    <View style={styles.container}>
      <Text>upload image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
