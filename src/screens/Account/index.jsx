import { Text, Button, Image } from "native-base";
import { View, ScrollView } from "react-native";
import {
  Purplerose1,
  Purplerose2,
  Purplerose3,
} from "../../constants";
import { useEffect } from 'react'
import AccountComponents from "./AccountComponents";
import useStore from "../../store";
import Home from "../Home";
import { useNavigation } from "@react-navigation/native";

export default function Account({ navigation, route }) {
  const user = useStore(state => state.user)
  useEffect(()=>{ 
  },[route])
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <AccountComponents user={user} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              alignItems: "center",
              width: "33%",
              borderRightWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <Text
              style={{ fontFamily: "Quicksand_700Bold", color: Purplerose2 }}
            >
              Xu
            </Text>
            <Text
              style={{ fontFamily: "Quicksand_500Medium", color: Purplerose3 }}
            >
              {user?.coins}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: "33%",
              borderRightWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <View>
              <Button backgroundColor={Purplerose1} onPress={() => navigation.navigate('Post')}>Đăng bài</Button>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              width: "33%",
              //   borderRightWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <View>
              <Button backgroundColor={Purplerose1} onPress={() => navigation.navigate('Recharge')}>Nạp tiền</Button>
            </View>
          </View>
        </View>
      </View>
      <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16, padding: 10, color: Purplerose3 }}>
        Bài viết của tôi
      </Text>
      <Home route={route} id={user?.id} />
    </View>
  );
}