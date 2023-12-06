import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Dimensions } from "react-native";
import { Purplerose3, Purplerose2, Purplerose1 } from "../../constants";
const windowWidth = Dimensions.get("window").width;

const Post = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const chooseImage = () => {
    if (images.length < 4) {
      setImages([...images, response.uri]);
    } else {
      alert("Bạn chỉ có thể chọn tối đa 4 ảnh.");
    }
  };

  const postContent = () => {
    console.log("Text:", text);
    console.log("Images:", images);
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
      <View
        style={{
          flex: 1,
          padding: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            height: 70,
            borderColor: "#ddd",
            borderWidth: 1,
            marginBottom: 16,
            padding: 8,
            width: windowWidth - 32,
            fontFamily: "Quicksand_500Medium",
          }}
          placeholder="Bạn đang nghĩ gì thế?"
          multiline
          onChangeText={(value) => setText(value)}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 16 }}
        >
          {images.map((imageUri, index) => (
            <Image
              key={index}
              source={{ uri: imageUri }}
              style={{ width: 100, height: 100, marginRight: 8 }}
            />
          ))}
          <TouchableOpacity
            style={{
              width: 350,
              height: 300,
              backgroundColor: "#fff",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 3,
              borderColor: Purplerose1,
            }}
            onPress={chooseImage}
          >
            <Text style={{ color: Purplerose1, fontSize: 32 }}>+</Text>
          </TouchableOpacity>
        </ScrollView>
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
          onPress={postContent}
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
