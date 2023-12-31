import React, { useEffect, useRef, useState } from "react";
import CommentComponents from "./CommentComponents";
import {
  Actionsheet,
  Button,
  Avatar,
  Input,
  Center,
  VStack,
  Skeleton,
} from "native-base";
import {
  Platform,
  ScrollView,
  View,
  Keyboard,
  Dimensions,
  Text,
  Animated,
  TextInput,
} from "react-native";
import { Padding, Purplerose1 } from "../constants";
import { postRequestJson } from "../hooks/api";
import useStore from "../store";


const ModelComponents = (props) => {
  const [text, setText] = useState();
  const myRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(10)).current;
  const subscriptions = useRef([]);
  const [data, setData] = useState([])
  const idComment = useStore(state => state.idComment)
  const isModel = useStore(state => state.isModel)
  const setIsModel = useStore(state => state.setIsModel)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function onKeyboardChange(e) {

    }

    if (Platform.OS === "ios") {
      subscriptions.current = [
        Keyboard.addListener("keyboardWillChangeFrame", onKeyboardChange),
      ];
    } else {
      subscriptions.current = [
        Keyboard.addListener("keyboardDidHide", (e) =>
          Animated.timing(fadeAnim, {
            toValue: 10,
            duration: 500,
            useNativeDriver: false,
          }).start()
        ),
        Keyboard.addListener("keyboardDidShow", (e) =>
          Animated.timing(fadeAnim, {
            toValue: 10 + e.endCoordinates.height,
            duration: 0,
            useNativeDriver: false,
          }).start()
        ),
      ];
    }
    return () => {
      subscriptions.current.forEach((subscription) => {
        subscription.remove();
      });
    };
  }, [Animated, subscriptions]);

  useEffect(() => {
    setLoading(true)
    postRequestJson('/get_mark_comment', {
      "id": idComment,
      "index": "0",
      "count": "100"
    })
      .then(dt => {
        setLoading(false)
        console.log(dt.data.length)
        setData(dt.data)
      }
      )
  }, [idComment, isModel])
  return (
    <Actionsheet isOpen={isModel} onClose={() => setIsModel(false)}>
      <Actionsheet.Content height={Dimensions.get("screen").height * 0.68}>
        <View style={{ height: "100%", position: "relative" }}>
          <View
            style={{
              height: Dimensions.get("screen").height * 0.68,
              width: Dimensions.get("screen").width,
            }}
          >
            {loading ? <View>
              <Center w="100%">
                <VStack w="100%" maxW="500" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                  borderColor: "white"
                }} _light={{
                  borderColor: "white",

                }} padding={4} style={{ backgroundColor: 'white' }}>
                  <Skeleton.Text px="4" />
                  <Skeleton h="40" />
                </VStack>
              </Center>
              <Center w="100%">
                <VStack w="100%" maxW="500" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                  borderColor: "white"
                }} _light={{
                  borderColor: "white",

                }} padding={4} style={{ backgroundColor: 'white' }}>
                  <Skeleton.Text px="4" />
                  <Skeleton h="40" />
                </VStack>
              </Center>

            </View> : (
              <ScrollView>
                {
                  data.map((dt, index) => (
                    <View key={index}>
                      <CommentComponents
                        content={dt?.mark_content}
                        like={[1, 2]}
                        poster={dt?.poster}
                        created={dt?.created}
                        reply={[
                          {
                            content:
                              " tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings.",
                            like: [1, 2],
                            reply: [
                              {
                                content:
                                  "y expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children wil",
                                like: [1, 2],
                                reply: [],
                              },
                              {
                                content:
                                  "LLL n only expand to fill available space if its parent has dimensions greater than 0. If a parent does not hav",
                                like: [1, 2],
                                reply: [],
                              },
                            ],
                          },
                          { content: "LLL jlasjdfl", like: [1, 2], reply: [] },
                        ]}
                      />

                    </View>
                  ))
                }
              </ScrollView>
            )}
          </View>
          <Animated.View
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              width: Dimensions.get("screen").width,
              justifyContent: "space-between",
              alignItems: "center",
              padding: Padding,
              borderTopWidth: 0.5,
              borderColor: "lightgray",
              position: "absolute",
              bottom: fadeAnim,
            }}
          >
            <Avatar
              bg="cyan.500"
              source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
              width="10"
              height={"10"}
            >
              TE
            </Avatar>
            <Input
              style={{ borderRadius: 30 }}
              placeholder="Thêm bình luận"
              w="60%"
              value={text}
              ref={myRef}
              onChangeText={(txt) => setText(txt)}
            />
            {/* <TextInput style={{width: '60%'}} ref={myRef}/> */}
            <Button
              color={Purplerose1}
              onPress={() => {
                console.log({
                  "id": ''+idComment,
                  "content": "so good",
                  "index": "0",
                  "count": "10",
                  "type": "1"
                })
                postRequestJson('/set_mark_comment',
                {
                  "id": ''+idComment,
                  "content": text,
                  "index": "0",
                  "count": "10",
                  "type": "1"
                })
                  .then(data => console.log(data))
                  .catch(err => console.log(JSON.stringify(err)))

                Keyboard.dismiss();
                setText("");
                // addData(text)
              }}
            >
              Đăng
            </Button>
          </Animated.View>
        </View>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
export default ModelComponents;
