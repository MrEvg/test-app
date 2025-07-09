import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  start: undefined;
  auth: undefined;
  main: NavigatorScreenParams<MainTabsParamList>;
};

export type MainTabsParamList = {
  dropdown: undefined;
  uploadImage: undefined;
  setTime: undefined;
  gradient: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
