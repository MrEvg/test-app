import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from './dropdown';
import { useCallback, useEffect, useState } from 'react';
import { DROPDOWN_ITEMS } from '@pages/dropdown/constants';

export const DropdownConnector = () => {
  const [login, setLogin] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Drop down list');

  useEffect(() => {
    const loadLogin = async () => {
      const storedLogin = await AsyncStorage.getItem('userLogin');
      if (storedLogin) {
        setLogin(storedLogin);
      }
    };
    loadLogin();
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleSelectItem = useCallback((item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  }, []);

  return (
    <Dropdown
      login={login}
      isOpen={isOpen}
      selectedItem={selectedItem}
      items={DROPDOWN_ITEMS}
      onToggle={handleToggle}
      onSelectItem={handleSelectItem}
    />
  );
};
