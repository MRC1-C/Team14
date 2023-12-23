import { useState } from "react";
import { View, Text, ScrollView, Keyboard } from "react-native";
import { Avatar, Button, Input } from "native-base";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import SvgUri from "react-native-svg-uri";
import { Purplerose1 } from "../constants";

export default function CommentComponents(props) {
  const [dataComment, setDataComment] = useState({
    data: [],
    isSeeMore: false,
  });
  const [react, setReact] = useState({
    quantity: props.like.length,
    isReact: false,
  });
  const addDataComment = (text) => {
    // setDataComment((prev) => ({
    //   ...prev,
    //   data: [{ _id: "af", selfComment: text }, ...dataComment.data],
    // }));
  };

  const handleReply = async () => {
    
  };
  return (
    <ScrollView>
      <View style={{ width: "100%", padding: 6 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            bg="cyan.500"
            source={{
              uri: props?.poster?.avatar
            }}
            width="10"
            height={"10"}
          >
            TE
          </Avatar>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              {props?.poster?.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Quicksand_500Medium",
                color: "#5F5F5F",
              }}
            >
              {props?.created}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Quicksand_500Medium",
              fontSize: 14,
              padding: 10,
            }}
          >
            {props?.content}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
