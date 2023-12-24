import React, { useRef, useState } from 'react'
import useStore from '../../store'
import { View, StyleSheet, Text, Dimensions } from "react-native";

import { SimpleCarousel } from "@wecraftapps/react-native-simple-carousel";
import { Image } from "native-base";
const ImageSeen = () => {
    const images = useStore(state => state.images)
    console.log(images)
    const [index, setIndex] = useState(0);
    const carouselRef = useRef(null);
    const quantity = images.length
    return (
        <View style={{height: '100%'}}>

            <View style={styles.container}>
                <SimpleCarousel ref={carouselRef} setIndex={setIndex}>
                    {images.length > 0 && images.map((img, idx) => (
                        <View style={styles.page} key={idx}>
                            <Image
                                source={{
                                    uri: img.url,
                                }}
                                key={index}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    resizeMode: "contain",
                                    borderRadius: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                alt="asdf"
                            />
                        </View>
                    ))}
                </SimpleCarousel>

                <View
                    style={[
                        styles.paginationContainer,
                        { width: quantity * 5 + (quantity - 1) * 6 },
                    ]}
                >
                    {images.map((img, idx) => (
                        <View
                            key={idx}
                            style={{
                                backgroundColor: index === idx ? "#6BBAFF" : "white",
                                height: 5,
                                width: 5,
                                borderRadius: 50,
                            }}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8
    },
    page: {
        width: '100%',
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    paginationContainer: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        bottom: 3,
    },
});
export default ImageSeen