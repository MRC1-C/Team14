import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Dimensions } from "react-native";
import { Purplerose3, Purplerose2, Purplerose1 } from "../../constants";
import * as ImagePicker from 'expo-image-picker';
import { Input } from "native-base";
import { postRequest } from "../../hooks/api";
import { useNavigation } from '@react-navigation/native';


const Post = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  const pickImage = async () => {
    if (images.length < 4) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 0.3,
      });

      if (result && !result.cancelled) {
        setImages([...images, result.assets[0].uri]);
      }
    } else {
      alert('You can select a maximum of 4 images.');
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const submitPost = () => {
    setImages([])
    const formData = new FormData();


    images.forEach((image, index) => {
      formData.append(`image`, {
        uri: image,
        type: 'image/jpeg',
        name: `image_${index}.jpg`,
      });
    });

    formData.append('described', text);
    formData.append('status', 'Hyped');
    formData.append('auto_accept', '1');
    formData.append('video', null);


    // console.log(text)
    postRequest('/add_post', formData)
      .then(data => navigation.navigate('Account'))
      .catch(err => console.log(JSON.stringify(err)))

  };


  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ddd" }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: Purplerose3,
            fontFamily: "Quicksand_500Medium",
          }}
        >
          New Post
        </Text>
      </View>
      <View>
        <Input value={text} onChangeText={setText} />
      </View>
      <View>
        <Text>Images:</Text>
        <TouchableOpacity onPress={pickImage}>
          <Text>Select Images</Text>
        </TouchableOpacity>
        {images.length > 0 && images.map((image, index) => (
          <View key={index}>
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
            <TouchableOpacity onPress={() => removeImage(index)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 16 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: Purplerose3,
            borderRadius: 8,
            padding: 12,
            alignItems: "center",
            width: 300,
          }}
          onPress={submitPost}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Đăng bài
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
