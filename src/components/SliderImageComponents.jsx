import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import { SimpleCarousel } from "@wecraftapps/react-native-simple-carousel";
import { Image } from "native-base";
import { Padding } from "../constants";
import { useNavigation } from "@react-navigation/native";
const SliderImageComponents = (props) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const quantity = props.imgs.length
  return (
    <>
      {
        props.imgs.length < 4 ?
          <View style={styles.container}>
            <SimpleCarousel ref={carouselRef} setIndex={setIndex}>
              {props.imgs.length > 0 && props.imgs.map((img, idx) => (
                <View style={styles.page} key={idx}>
                  <Image
                    source={{
                      uri: img.uri,
                    }}
                    key={index}
                    style={{
                      width: "100%",
                      height: 350,
                      resizeMode: "cover",
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
              {props.imgs.map((img, idx) => (
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
          </View> :
          <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Image source={{ uri: props.imgs[0].uri }} style={{
                width: "100%",
                height: 100,
                resizeMode: "cover",
                justifyContent: "center",
                alignItems: "center",
              }}></Image>
              <Image source={{ uri: props.imgs[1].uri }} style={{
                width: "100%",
                height: 100,
                resizeMode: "cover",
                justifyContent: "center",
                alignItems: "center",
              }}></Image>
              <Image source={{ uri: props.imgs[2].uri }} style={{
                width: "100%",
                height: 100,
                resizeMode: "cover",
                justifyContent: "center",
                alignItems: "center",
              }}></Image>
            </View>
            <View style={{ width: '50%' }}>
              <Image source={{ uri: props.imgs[3].uri }} style={{
                width: "100%",
                height: 300,
                resizeMode: "cover",
                justifyContent: "center",
                alignItems: "center",
              }}></Image>
            </View>
          </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8
  },
  page: {
    width: Dimensions.get('screen').width - 2 * Padding,
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

export default SliderImageComponents;
