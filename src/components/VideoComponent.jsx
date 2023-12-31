import { ScrollView, Text, View } from 'native-base';
import React from 'react';
import VideoPlayer from 'expo-video-player'
import { ResizeMode } from 'expo-av';

import {
    Image,
    Button,
} from "native-base";
import SvgUri from "react-native-svg-uri";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import share from "../image/shareimage.svg";
import { Padding } from "../constants";
import useStore from "../store";

export default function VideoComponent(props) {
    const setidComment = useStore(state => state.setIdComment)
    const setIsModel = useStore(state => state.setIsModel)


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
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        source: {
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        },
                        resizeMode: ResizeMode.CONTAIN,
                        shouldPlay: false
                    }}
                    style={{ width: 500, height: 200, alignSelf: 'center', }}
                    defaultControlsVisible={true}
                    
                />
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
                    <Button onPress={() => console.log("first")} variant="ghost">
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
                                {props?.feel}
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
