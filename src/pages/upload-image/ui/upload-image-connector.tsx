import { UploadImage } from './upload-image';
import { useCallback, useEffect, useState } from 'react';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UploadImageConnector = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [resetLike, setResetLike] = useState(false);

  const loadSavedImage = useCallback(async () => {
    const savedUri = await AsyncStorage.getItem('saved_image');
    if (savedUri) {
      setImageUri(savedUri);
    }
  }, []);

  useEffect(() => {
    loadSavedImage();
  }, [loadSavedImage]);

  const handlePickPhoto = useCallback(async () => {
    const options: { mediaType: MediaType } = { mediaType: 'photo' };

    launchImageLibrary(options, async res => {
      if (res.didCancel || res.errorCode || !res.assets?.[0]?.uri) {
        return;
      }

      const uri = res.assets[0].uri;
      setImageUri(uri);
      setResetLike(prev => !prev);
      await AsyncStorage.setItem('saved_image', uri);
    });
  }, []);

  const handleResetPhoto = useCallback(async () => {
    setImageUri(null);
    setResetLike(prev => !prev);
    await AsyncStorage.removeItem('saved_image');
  }, []);

  return (
    <UploadImage
      imageUri={imageUri}
      onPress={handlePickPhoto}
      showButton={!imageUri}
      resetLike={resetLike}
      onResetPhoto={handleResetPhoto}
    />
  );
};
