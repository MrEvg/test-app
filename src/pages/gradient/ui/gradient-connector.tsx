import { StyleSheet, Text, View } from 'react-native';

export const GradientConnector = () => {
  return (
    <View style={styles.container}>
      <Text>gradient</Text>
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
