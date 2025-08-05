import { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLikeAnimation } from '@shared/lib';
import { LikeButton } from './like-button';

type Props = {
  externalReset: boolean;
};

export const LikeButtonConnector = ({ externalReset }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { triggerAnimation } = useLikeAnimation();

  const handlePress = useCallback(async () => {
    const newValue = !isLiked;
    const { scale, rotate } = triggerAnimation(newValue);
    setIsLiked(newValue);
    await AsyncStorage.setItem('like_status', String(newValue));
    return { scale, rotate };
  }, [isLiked, triggerAnimation]);

  const loadLikeStatus = useCallback(async () => {
    const savedStatus = await AsyncStorage.getItem('like_status');
    setIsLiked(savedStatus === 'true');
  }, []);

  useEffect(() => {
    if (externalReset) {
      setIsLiked(false);
      AsyncStorage.setItem('like_status', 'false');
    }
  }, [externalReset]);

  useEffect(() => {
    loadLikeStatus();
  }, [loadLikeStatus]);

  return <LikeButton isLiked={isLiked} onPress={handlePress} />;
};
