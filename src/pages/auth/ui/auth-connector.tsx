import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { MainButton } from '@shared/ui';
import { Header } from '@routing/navigators/protected/components';

interface IAuthConnectorProps {
  onPress: () => void;
}

export const AuthConnector = ({onPress}: IAuthConnectorProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const isLoginValid = login.length > 2;
  const isPasswordValid = password.length > 2;

  return (
    <View style={styles.container}>
      <Header title="Sign In" showBackButton={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexContainer}
        keyboardVerticalOffset={-30}
      >
        <View style={styles.topSpacer} />

        <View style={styles.bottomContainer}>
          <View style={styles.formContainer}>
            <TextInput
              style={[styles.input, isLoginValid && styles.validInput]}
              placeholder="Login"
              value={login}
              onChangeText={setLogin}
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={[styles.input, isPasswordValid && styles.validInput]}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#BDBDBD"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonContainer}>
        <MainButton
          title="Sign In"
          onPress={onPress}
          disabled={!isLoginValid || !isPasswordValid}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomStrip: {
    backgroundColor: 'red',
    height: 1,
  },
  flexContainer: {
    flex: 1,
    backgroundColor: '#4F4F4F',
  },
  topSpacer: {
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#4F4F4F',
  },
  formContainer: {
    flex: 1,
    marginBottom: 160,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: 'black',
    marginBottom: 15,
    fontSize: 16,
  },
  validInput: {
    borderColor: '#54e859',
    borderWidth: 2,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: '8%',
    backgroundColor: '#4F4F4F',
  },
});
