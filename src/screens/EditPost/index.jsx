import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Dimensions } from "react-native";
import { Purplerose3, Purplerose2, Purplerose1 } from "../../constants";
import * as ImagePicker from 'expo-image-picker';
import { Button, Input, useToast } from "native-base";
import { postRequest } from "../../hooks/api";
import { useNavigation } from '@react-navigation/native';
import useStore from "../../store";



const EditPost = () => {
    const post = useStore(state => state.post)
    const [text, setText] = useState(post?.content);
    const [images, setImages] = useState(post?.image.map(img => img?.url));
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const toast = useToast()
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
        setLoading(true)
        const formData = new FormData();
        images.forEach((image, index) => {
            formData.append(`image`, {
                uri: image,
                type: "image/jpeg",
                name: `image_${index}.jpg`,
            });
        });
        if (text.trim() !== "") {
            formData.append("described", text);
        }
        formData.append("status", "Hyped");
        formData.append("auto_accept", "1");
        formData.append("id", post?.id);



        postRequest("/edit_post", formData)
            .then(data => {
                setLoading(false)
                toast.show({
                    title: "Sửa bài thành công", placement: 'top'
                })
                navigation.navigate('Account', { refresh: Math.random() })
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
                    New Post
                </Text>
            </View>
            <View style={{ padding: 16 }}>
                <Input
                    value={text}
                    onChangeText={setText}
                    placeholder="Bạn đang nghĩ gì thế?"
                    multiline
                    style={{
                        fontFamily: "Quicksand_500Medium",
                        borderColor: "#ddd",
                        marginBottom: 16,
                        padding: 8,
                    }}
                />

                <ScrollView
                    horizontal={images.length > 0}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginBottom: 16 }}
                >
                    <TouchableOpacity
                        style={{
                            width: 175,
                            height: 175,
                            backgroundColor: "#fff",
                            borderRadius: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 3,
                            borderColor: Purplerose1,
                            marginBottom: 10,
                            marginTop: 10,
                        }}
                        onPress={pickImage}
                    >
                        <Text style={{ color: Purplerose1, fontSize: 32 }}>+</Text>
                    </TouchableOpacity>
                    {images.length > 0 &&
                        images.map((image, index) => (
                            <View>
                                <View key={index} style={{ margin: 10, position: "relative" }}>
                                    <Image
                                        source={{ uri: image }}
                                        style={{
                                            width: 175,
                                            height: 175,
                                            borderWidth: 3,
                                            borderColor: Purplerose1,
                                            borderRadius: 8,
                                        }}
                                    />
                                    <TouchableOpacity
                                        onPress={() => removeImage(index)}
                                        style={{
                                            position: "absolute",
                                            width: 30,
                                            height: 30,
                                            top: 0,
                                            right: 0,
                                            backgroundColor: Purplerose1,
                                            borderRadius: 5,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Text style={{ color: "#fff", fontSize: 15 }}>×</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
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
                    onPress={submitPost}
                >
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                        Sửa bài
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditPost;

