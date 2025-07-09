import { StartConnector } from '@pages/start';
import { useNavigation } from '@react-navigation/native';

export const StartScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('auth');
  };

  return <StartConnector onPress={handlePress} />;
};
