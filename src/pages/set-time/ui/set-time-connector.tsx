import { StyleSheet, Text, View } from 'react-native';

export const SetTimeConnector = () => {
  return (
    <View style={styles.container}>
      <Text>set time</Text>
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
