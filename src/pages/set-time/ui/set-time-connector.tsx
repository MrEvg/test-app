import React, { useState } from 'react';
import { SetTime } from './set-time';
import { Picker } from '../components';

export const SetTimeConnector = () => {
  const [datetime, setDatetime] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleConfirm = (date: Date) => {
    setDatetime(date);
    setShowPicker(false);
  };

  const handleCancel = () => {
    setShowPicker(false);
  };

  const handleReset = () => {
    setDatetime(null);
  };

  const formatDateTime = () => {
    if (!datetime) {
      return 'Set datetime';
    }

    return datetime.toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <SetTime
        onPress={() => setShowPicker(true)}
        onReset={handleReset}
        buttonText={formatDateTime()}
        showReset={!!datetime}
      />

      <Picker
        visible={showPicker}
        initialDate={datetime}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};
