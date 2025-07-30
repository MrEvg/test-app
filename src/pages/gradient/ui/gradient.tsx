import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  colors: string[];
  isVisible: boolean;
  onToggle: () => void;
};

export const Gradient = ({ colors, isVisible, onToggle }: Props) => {
  const buttonStyle = [
    styles.button,
    isVisible ? styles.buttonActive : styles.buttonInactive,
  ];

  return (
    <View style={styles.container}>
      {isVisible ? (
        <View style={styles.gradient}>
          {colors.map((color, index) => (
            <View
              key={index}
              style={[
                styles.gradientSegment,
                {
                  backgroundColor: color,
                  top: `${(index / colors.length) * 100}%`,
                  height: `${100 / colors.length}%`,
                },
              ]}
            />
          ))}
        </View>
      ) : (
        <View style={styles.gradient} />
      )}

      <TouchableOpacity
        style={buttonStyle}
        onPress={onToggle}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>{isVisible ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F4F4F',
  },
  gradient: {
    width: 300,
    height: 500,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 100,
  },
  gradientSegment: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
  },
  button: {
    height: 60,
    width: 320,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
  },
  buttonActive: {
    backgroundColor: '#27AE60',
  },
  buttonInactive: {
    backgroundColor: '#4e7ae4',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 26,
  },
});
