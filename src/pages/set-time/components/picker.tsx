import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

type Props = {
  visible: boolean;
  initialDate?: Date | null;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
};

export const Picker = ({
  visible,
  initialDate,
  onConfirm,
  onCancel,
}: Props) => {
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [tempDate, setTempDate] = useState<Date>(initialDate || new Date());
  const timeSelectionStarted = useRef(false);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (visible) {
          onCancel();
        }
      };
    }, [visible, onCancel]),
  );

  useEffect(() => {
    if (visible) {
      setMode('date');
      timeSelectionStarted.current = false;
      setTempDate(initialDate || new Date());
    }
  }, [visible, initialDate]);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      if (selectedDate) {
        if (mode === 'date') {
          setTempDate(selectedDate);
          setMode('time');
        } else {
          const finalDate = new Date(tempDate);
          finalDate.setHours(selectedDate.getHours());
          finalDate.setMinutes(selectedDate.getMinutes());
          onConfirm(finalDate);
        }
      } else {
        onCancel();
      }
    } else {
      if (selectedDate) {
        if (mode === 'date') {
          setTempDate(selectedDate);
        } else {
          const finalDate = new Date(tempDate);
          finalDate.setHours(selectedDate.getHours());
          finalDate.setMinutes(selectedDate.getMinutes());
          setTempDate(finalDate);
        }
      }
    }
  };

  const handleActionPress = () => {
    if (mode === 'date') {
      setMode('time');
    } else {
      onConfirm(tempDate);
    }
  };

  const displayMode =
    Platform.OS === 'ios'
      ? mode === 'date'
        ? 'inline'
        : 'spinner'
      : 'default';

  if (!visible) return null;

  return (
    <TouchableWithoutFeedback onPress={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.pickerContainer}>
          <DateTimePicker
            value={tempDate}
            mode={mode}
            display={displayMode}
            onChange={handleChange}
            minimumDate={new Date()}
            maximumDate={new Date(2030, 12, 31)}
            locale="ru-RU"
            {...({ is24Hour: true } as any)}
            themeVariant="dark"
          />

          {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleActionPress}
            >
              <Text style={styles.actionButtonText}>
                {mode === 'date' ? 'Next' : 'Set'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    backgroundColor: '#4F4F4F',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  actionButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#4e7ae4',
    borderRadius: 10,
    alignSelf: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
