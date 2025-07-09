import { Button, StyleSheet, Text, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@routing/navigators/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const AuthConnector = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'main' }],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text>auth page</Text>
      <Button title="sign in" onPress={handlePress} />
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
