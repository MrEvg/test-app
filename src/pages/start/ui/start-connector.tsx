import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const StartConnector = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>start page</Text>
      <Button title="next" onPress={() => navigation.navigate('auth')} />
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
