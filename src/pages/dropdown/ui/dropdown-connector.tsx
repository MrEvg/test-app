import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DropdownConnector = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>dropdown</Text>
      <Button title="prev" onPress={() => navigation.navigate('auth')} />
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
