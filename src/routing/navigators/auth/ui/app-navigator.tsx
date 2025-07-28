import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabsNavigator } from '@routing/navigators';
import { AuthScreen, StartScreen } from '@routing/navigators/auth';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: 'fade' }}
    initialRouteName="start"
  >
    <Stack.Screen name="start" component={StartScreen} />
    <Stack.Screen name="auth" component={AuthScreen} />
    <Stack.Screen name="main" component={TabsNavigator} />
  </Stack.Navigator>
);
