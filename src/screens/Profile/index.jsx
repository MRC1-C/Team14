import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Dimensions } from "react-native";
import { Purplerose3, Purplerose2, Purplerose1 } from "../../constants";
import * as ImagePicker from 'expo-image-picker';
import { Button, Input, useToast } from "native-base";
import { postRequest } from "../../hooks/api";
import { useNavigation } from '@react-navigation/native';
import useStore from "../../store";


const Profile = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();
  const toast = useToast()
  const setUser = useStore(state => state.setUser)
  const user = useStore(state=>state.user)

  const pickImage = async () => {
    if (images.length < 4) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 0.3,
      });

      if (result && !result.cancelled) {
        setImages(result.assets[0].uri);
      }
    } else {
    }
  };


  const submitPost = () => {
    setLoading(true)
    const formData = new FormData();
    console.log(images.split('/').pop())
    console.log(text, images)
    formData.append('avatar', {
      uri: images,
      type: 'image/'+ images.split('.').pop(),
      name: "image" + images.split('/').pop()
    });
    formData.append('username', text);


    postRequest('/change_profile_after_signup', formData)
      .then(data => {
        setLoading(false)
        setUser({ ...user,...data.data })
        toast.show({
          title: "Tạo tài khoản thành công", placement: 'top'
        })
        navigation.navigate('Home', { refresh: Math.random() })
      }
      )
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
          Profile
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
        <View >
          <Image source={{ uri: images }} style={{ width: 100, height: 100 }} />
        </View>
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 16 }}
      >
        <Button
          style={{
            backgroundColor: Purplerose3,
            borderRadius: 8,
            padding: 12,
            alignItems: "center",
            width: 300,
          }}
          onPress={submitPost}
          isLoading={loading}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Tạo profile
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Profile;
