import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Button } from "native-base";
import { Text, View } from "react-native";
import { Purplerose1, Purplerose2 } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { getRequest, GetStorage, getToken, RemoveStorage, SetStorage } from "../../hooks/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountComponents = () => {
  const navigation = useNavigation();
  const [User, setUser] = useState(null)
  useEffect(() => {
    AsyncStorage.getItem('accessToken')
    .then(value => setUser(value))
     
  },[]);
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
        <Avatar
          bg="amber.500"
          source={{
            uri: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/40f9bce2acffc0b9dd65ec9ee11bd0d4.jpeg?x-expires=1661443200&x-signature=VduT2wxDBGhq%2B%2FkUWDBLkPco5RA%3D",
          }}
          size={70}
        >
          TS
        </Avatar>
        {User!=null ? (
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: "Quicksand_700Bold" }}>
              {User}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Quicksand_500Medium",
                color: Purplerose1,
              }}
            >
              thanh vien blackpink
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                paddingBottom: 10,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              Chao mung den voi FB
            </Text>
            <Button
              variant="outline"
              borderColor={Purplerose2}
              _text={{ color: Purplerose2 }}
              onPress={() => navigation.navigate("Auth")}
            >
              Đăng nhập/Đăng ký
            </Button>
          </View>
        )}
      </View>
      {User && (
        <Button
          variant={"ghost"}
          onPress={async () => {
            setUser(null)
            navigation.navigate('Auth') 
            await RemoveStorage();
          }}
        >
          <AntDesign name="logout" size={24} color={Purplerose2} />
        </Button>
      )}
    </View>
  );
};
export default AccountComponents;