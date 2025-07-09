import { StyleSheet, View, Text } from 'react-native';

export const DropdownConnector = () => {
  return (
    <View style={styles.container}>
      <Text>dropdown</Text>
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
