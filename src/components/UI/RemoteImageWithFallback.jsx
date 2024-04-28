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
    width: 70, // Set your preferred width
    height: 70, // Set your preferred height
    resizeMode: 'cover', // Adjust as per your requirement
  },
});

export default RemoteImageWithFallback;
