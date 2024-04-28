import React, {useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';

const RemoteImageWithFallback = ({source, fallbackSource, style}) => {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return (
    <View>
      {!error ? (
        <Image
          source={source}
          style={[styles.image, style]}
          onError={onError}
        />
      ) : (
        <Image source={fallbackSource} style={[styles.image, style]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

export default RemoteImageWithFallback;
