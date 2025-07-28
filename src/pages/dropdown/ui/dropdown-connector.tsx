import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DropdownConnector = () => {
  const login = AsyncStorage.getItem('userLogin');

  return (
    <View style={styles.container}>
      <Text>Привет, {login}</Text>
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
