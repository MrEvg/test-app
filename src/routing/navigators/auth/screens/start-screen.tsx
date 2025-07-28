import { StartConnector } from '@pages/start';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '@routing/navigators/types.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const StartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [hasAuth, setHasAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const savedLogin = await AsyncStorage.getItem('userLogin');
      const savedPass = await AsyncStorage.getItem('userPassword');
      setHasAuth(!!savedLogin && !!savedPass);
    };
    checkAuth();
  }, []);

  const handlePress = () => {
    if (hasAuth) {
      navigation.navigate('main');
    } else {
      navigation.navigate('auth');
    }
  };

  return <StartConnector onPress={handlePress} />;
};
