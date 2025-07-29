import { UploadImage } from './upload-image';
import { useState } from 'react';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';

export const UploadImageConnector = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handlePickPhoto = () => {
    const options: { mediaType: MediaType } = { mediaType: 'photo' };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        return;
      }
      if (res.errorCode) {
        return;
      }

      const uri = res.assets?.[0]?.uri;
      if (uri) {
        setImageUri(uri);
      }
    });
  };

  return (
    <UploadImage
      imageUri={imageUri}
      onPress={handlePickPhoto}
      showButton={!imageUri}
    />
  );
};
