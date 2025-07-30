import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DropdownScreen,
  GradientScreen,
  SetTimeScreen,
  UploadImageScreen,
} from '@routing/navigators/protected';
import { Header } from '../components';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const renderHeader = (route: RouteProp<ParamListBase, string>) => (
  <Header title={route.name} />
);

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#e405fd',
        tabBarInactiveTintColor: '#000',
        tabBarIconStyle: { height: 0 },
        tabBarLabelStyle: {
          fontSize: 16,
          paddingTop: 10,
         },
        tabBarStyle: {
          paddingBottom: 5,
          height: 64,
          backgroundColor: '#C4C4C4',
        },
        header: () => renderHeader(route),
      })}
    >
      <Tab.Screen name="TAB 1" component={DropdownScreen} />
      <Tab.Screen name="TAB 2" component={UploadImageScreen} />
      <Tab.Screen name="TAB 3" component={SetTimeScreen} />
      <Tab.Screen name="TAB 4" component={GradientScreen} />
    </Tab.Navigator>
  );
};
