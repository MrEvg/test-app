import { AuthConnector } from '@pages/auth';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const AuthScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'main' }],
      }),
    );
  };

  return <AuthConnector onPress={handlePress} />;
};
