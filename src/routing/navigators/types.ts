export type RootStackParamList = {
  start: undefined;
  auth: undefined;
  main: { screen: keyof MainTabsParamList } | undefined;
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
