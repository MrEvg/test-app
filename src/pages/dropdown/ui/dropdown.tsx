import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollView = Animated.ScrollView;

type Props = {
  login: string;
  isOpen: boolean;
  selectedItem: string;
  items: string[];
  onToggle: () => void;
  onSelectItem: (item: string) => void;
};

export const Dropdown = ({
  login,
  isOpen,
  selectedItem,
  items,
  onToggle,
  onSelectItem,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Привет, {login}!</Text>

      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={onToggle}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{selectedItem}</Text>
            <Ionicons
              name={isOpen ? 'caret-up' : 'caret-down'}
              style={styles.icon}
              size={16}
            />
          </View>
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.list}>
            <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
              {items.map((item, index) => (
                <TouchableOpacity
                  key={`${item}_${index}`}
                  style={styles.listItem}
                  onPress={() => onSelectItem(item)}
                >
                  <Text style={styles.listItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4F4F4F',
  },
  greetingText: {
    paddingTop: 60,
    color: '#FFFFFF',
    fontSize: 32,
  },
  dropdownContainer: {
    marginTop: 50,
    width: 360,
    position: 'relative',
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#828282',
  },
  buttonText: {
    color: '#828282',
  },
  icon: {
    color: '#828282',
  },
  list: {
    position: 'absolute',
    top: 40,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 4,
    maxHeight: 480,
  },
  scrollView: {
    backgroundColor: '#FFF',
    borderRadius: 4,
  },
  listItem: {
    padding: 10,
  },
  listItemText: {
    color: '#828282',
  },
});
