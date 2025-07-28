import { useState } from 'react';
import { Auth } from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthConnectorProps {
  onPress: () => void;
}

export const AuthConnector = ({ onPress }: IAuthConnectorProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const isLoginValid = login.length > 2;
  const isPasswordValid = password.length > 2;

  const handleAuth = async () => {
    await AsyncStorage.multiSet([
      ['userLogin', login],
      ['userPassword', password],
    ]);
    onPress();
  };

  return (
    <Auth
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
      isLoginValid={isLoginValid}
      isPasswordValid={isPasswordValid}
      onPress={handleAuth}
    />
  );
};
