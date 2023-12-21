import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Input, Pressable } from "native-base";
import React, { useState,useEffect } from "react";
import { Text, View } from "react-native";
import { Padding, Purplerose1 } from "../../constants";
import { SetStorage } from "../../hooks/api";
import uuid from 'react-native-uuid';
import useStore from "../../store";


export default function AuthPassword({ route }) {
  const navigation = useNavigation()
  const { accout } = route.params;
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const setUser = useStore(state => state.setUser);
  const setID = useStore(state => state.setID);

  const handleLogin =  async() => {
    // await SetStorage(accout);
  };


  return (
    <View
      style={{ padding: Padding, backgroundColor: "white", height: "100%" }}
    >
      <Text
        style={{
          fontFamily: "Quicksand_700Bold",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        Ma xac nhan
      </Text>
      <Text style={{ fontFamily: "Quicksand_500Medium" }}>
        Vui long nhap ma xac nhan
      </Text>
      <Text style={{ fontFamily: "Quicksand_700Bold" }}>
        {route.params.accout}
      </Text>
      <Input
        variant="underlined"
        marginBottom={5}
        placeholder="Nhap ma xac nhan"
        marginTop={5}
        size="lg"
        keyboardType="numeric"
        value={password}
        onChangeText={(value) => setPassword(value)}
        // type={show ? "text" : "password"}
        // InputRightElement={
        //   <Pressable onPress={() => setShow(!show)}>
        //     <Icon
        //       as={
        //         <MaterialIcons name={show ? "visibility" : "visibility-off"} />
        //       }
        //       size={5}
        //       mr="2"
        //       color="muted.400"
        //     />
        //   </Pressable>
        // }
      />
      <Button
        backgroundColor={Purplerose1}
        onPress={() => handleLogin(accout, password)}
        isLoading={isLoading}
      >
        Dang nhap
      </Button>
    </View>
  );
}