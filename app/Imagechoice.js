import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePick = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access gallery denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setSelectedImage(result.uri);
      // Navigate to the next page with the selected image
      navigation.navigate('ThirdPage', { selectedImage: result.uri });
    }
  };

  return (
    <View>
      <Button title="Open Gallery" onPress={handleOpenGallery} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ImagePick;