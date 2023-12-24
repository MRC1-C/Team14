import { Text, Button, Image, useToast } from "native-base";
import { View, ScrollView } from "react-native";
import {
    Purplerose1,
    Purplerose2,
    Purplerose3,
} from "../../constants";
import { useEffect } from 'react'
import PersonalComponents from "./PersonalComponents";
import useStore from "../../store";
import Home from "../Home";
import { postRequestJson } from "../../hooks/api";

export default function Personal({ navigation, route }) {
    const frend = useStore(state => state.frend)
    const toast = useToast()
    useEffect(() => {
    }, [route])
    return (
        <View>
            <View
                style={{
                    backgroundColor: "white",
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }}
            >
                <PersonalComponents user={frend} />
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                        <View>
                            <Button backgroundColor={Purplerose1} onPress={() => {
                                postRequestJson('/set_request_friend',
                                    {
                                        "user_id": frend.id,
                                    })
                                    .then(data => {
                                        toast.show({ title: "Đã gửi lời mời kết bạn", placement: 'top' })
                                        console.log(data)
                                    })
                            }}>Gửi lời mời kết bạn</Button>
                        </View>
                </View>
            </View>
            <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16, padding: 10, color: Purplerose3 }}>
                Bài viết của {frend.name}
            </Text>
            <Home route={route} id={frend?.id} />
        </View>
    );
}