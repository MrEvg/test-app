import { Button, StyleSheet, Text, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@routing/navigators/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header } from '@routing/navigators/protected/components';

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
    <View style={styles.mainContainer}>
      <Header title="Sign in" showBackButton={true} />
      <View style={styles.container}>
        <Text>auth page</Text>
        <Button title="sign in" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
