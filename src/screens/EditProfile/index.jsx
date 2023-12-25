import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Purplerose3, Purplerose1, Purplerose2 } from "../../constants";
import * as ImagePicker from "expo-image-picker";
import { Button, Input, useToast, Avatar } from "native-base";
import { postRequest } from "../../hooks/api";
import { useNavigation } from "@react-navigation/native";
import useStore from "../../store";

const EditProfile = (props) => {
  const user = useStore((state) => state.user);
  const [text, setText] = useState(user?.username);
  const [images, setImages] = useState(user?.avatar);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const setUser = useStore((state) => state.setUser);

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
    setLoading(true);
    const formData = new FormData();
    console.log(images.split("/").pop());
    console.log(text, images);

    // formData.append("avatar", {
    //   uri: images,
    //   type: "image/" + images.split(".").pop(),
    //   name: "image" + images.split("/").pop(),
    // });
    // formData.append("username", text);
    if (images) {
      formData.append("avatar", {
        uri: images,
        type: "image/" + images.split(".").pop(),
        name: "image" + images.split("/").pop(),
      });
    }

    if (text !== "") {
      formData.append("username", text);
    }

    postRequest("/change_profile_after_signup", formData)
      .then((data) => {
        setLoading(false);
        setUser({ ...user, ...data.data });
        toast.show({
          title: "Cập nhật thông tin thành công",
          placement: "top",
        });
        navigation.navigate("Home", { refresh: Math.random() });
      })
      .catch((err) => console.log(JSON.stringify(err)));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <View style={{ padding: 10,}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: Purplerose3,
          }}
        >
          Profile Picture
        </Text>
        <TouchableOpacity style={{position: "absolute", right:0}} onPress={pickImage}>
          <Text style={{position: "absolute", right:10, top: 15, color: Purplerose1}}> Edit</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#fff",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderWidth: 3,
            borderColor: Purplerose3,
            marginBottom: 10,
            marginTop: 10,
            padding: 10,
          }}
          onPress={pickImage}
        >
          {images ? (
            <Avatar
              source={{ uri: images }}
              size={194}
            />
          ) : (
            <Avatar
            bg="amber.500"
            source={{
              uri: props?.user?.avatar
            }}
            size={194}
          />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: "lightgrey",
          borderBottomWidth: 1,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: Purplerose3,
            marginBottom: 30,
          }}
        >
          Your Name
        </Text>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Input
            value={text}
            onChangeText={setText}
            placeholder= {'Recent name: ' +  (props?.user?.username)}
            style={{
              borderWidth: 2,
              borderColor: Purplerose1,
              fontSize: 15,
              color: Purplerose3,
              fontFamily: "Quicksand_700Bold",
            }}
          />
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
            width: "60%",
            marginTop: "20%",
          }}
          onPress={submitPost}
          isLoading={loading}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Cập nhật thay đổi
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default EditProfile;
