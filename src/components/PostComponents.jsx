import {
  Image,
  Button,
} from "native-base";
import { View, Text } from "react-native";
import SvgUri from "react-native-svg-uri";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import share from "../image/shareimage.svg";
import SliderImageComponents from "./SliderImageComponents";
import { Padding } from "../constants";
import ModelComponents from "./ModelComponents";
import { useState } from "react";
import useStore from "../store";
import { postRequestJson } from "../hooks/api";

export default function PostComponents(props) {
  const setidComment = useStore(state => state.setIdComment)
  const setIsModel = useStore(state => state.setIsModel)
  const [isFeel, setIsFeel] = useState(false)

  return (
    <View
      style={{ backgroundColor: "white", marginBottom: 10, paddingBottom: 10 }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
          paddingTop: Padding,
          paddingLeft: Padding,
          paddingRight: Padding,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image
            size={50}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: props.author?.avatar,
            }}
          />
          <View style={{ marginLeft: 14 }}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 8,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              {props.author?.name}
            </Text>
            <Text
              style={{
                color: "#444444",
                fontFamily: "Quicksand_700Bold",
                fontSize: 12
              }}
            >
              {props?.created}
            </Text>
          </View>
        </View>
        {/*    */}
      </View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "Quicksand_500Medium",
          paddingLeft: Padding,
          paddingRight: Padding,
          paddingBottom: Padding,
        }}
      >
        {props.content}
      </Text>
      <View>
        {
          props?.image && <SliderImageComponents
            imgs={props?.image?.map(image => ({ uri: image.url }))}
          />

        }
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            paddingLeft: Padding,
            paddingRight: Padding,
            paddingTop: 5,
          }}
        >
          <Button onPress={() => {
            !isFeel ?
              postRequestJson('/feel', {
                "id": props.id,
                "type": "0"
              })
                .then(data => setIsFeel(true))
              :
              postRequestJson('/delete_feel', {
                "id": props.id,
              })
                .then(data => setIsFeel(false))
          }} variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={like} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                {parseInt(props?.feel) + (isFeel ? 1 : 0)}
              </Text>
            </View>
          </Button>
          <Button onPress={() => {
            setIsModel(true)
            setidComment(props.id)
          }
          } variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={comment} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                {props.comment_mark}
              </Text>
            </View>
          </Button>
          <Button variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={share} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                report
              </Text>
            </View>
          </Button>
        </View>

      </View>
    </View>
  );
}
