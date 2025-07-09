import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IHeaderProps {
  title: string;
  showBackButton?: boolean;
}

export const Header = ({ title, showBackButton }: IHeaderProps) => {
  const navigation = useNavigation();
  const route = useRoute();

  const shouldShowBack = showBackButton ?? route.name === 'auth';

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          {shouldShowBack ? (
            <TouchableOpacity onPress={() => navigation.navigate('start')}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ) : null}
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.rightContainer}>
          {!shouldShowBack ? (
            <TouchableOpacity onPress={() => navigation.navigate('auth')}>
              <Ionicons name="log-out-outline" size={24} color="black" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#C4C4C4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: -8,
  },
  leftContainer: {
    width: 30,
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: 30,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
});
