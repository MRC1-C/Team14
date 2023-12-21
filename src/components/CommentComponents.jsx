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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Button
              onPress={() => {
                if (react.isReact) {
                  setReact((prev) => ({
                    isReact: false,
                    quantity: prev.quantity - 1,
                  }));
                } else {
                  setReact((prev) => ({
                    isReact: true,
                    quantity: prev.quantity + 1,
                  }));
                }
                reactReply(idPost, "Like", props.id);
              }}
              variant="ghost"
              width={"20%"}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri
                  width={14}
                  fill={react.isReact ? Purplerose1 : "#444444"}
                  source={like}
                />
                <Text
                  style={{
                    color: react.isReact ? Purplerose1 : "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 11,
                  }}
                >
                  {react.quantity}
                </Text>
              </View>
            </Button>
            <Button
              variant="ghost"
              onPress={() => {
                // addDataComment("asdfsdf ksdkfdk");
                props.focusInput(addDataComment);
              }}
            >
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
                  Trả lời
                </Text>
              </View>
            </Button>
          </View>
        </View>
      </View>
      {/* <View style={{ paddingLeft: 20 }}>
        {
          <View>
            {dataComment.data.map((dt) => (
              <CommentComponents
                content={dt.selfComment}
                like={[1, 2]}
                id={dt._id}
                key={dt._id}
                focusInput={props.focusInput}
              />
            ))}
          </View>
        }
      </View> */}
    </ScrollView>
  );
}
