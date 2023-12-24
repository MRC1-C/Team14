import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Button, FormControl, Input, Modal, useToast } from "native-base";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Purplerose1, Purplerose2 } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import {
    getRequest,
    GetStorage,
    getToken,
    postRequestJson,
    RemoveStorage,
    SetStorage,
} from "../../hooks/api";
import imageSetting from "../../image/setting.png";
import useStore from "../../store";

const PersonalComponents = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const navigation = useNavigation();
    const [text, setText] = useState()
    const [newText, setNewText] = useState()
    const setUser = useStore(state => state.setUser)
    const [loading, setLoaing] = useState(false)
    const toast = useToast()
    console.log(props.user)
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                marginBottom: 20,
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity>
                    <Avatar
                        bg="amber.500"
                        source={{
                            uri: props?.user?.avatar
                        }}
                        size={70}

                    >
                        TS
                    </Avatar>
                </TouchableOpacity>
                {props.user != null && (
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 20, fontFamily: "Quicksand_700Bold" }}>
                            {props.user.name}
                        </Text>
                    </View>

                )}
            </View>

        </View>
    );
};
export default PersonalComponents;
