import { Text, Button, Image } from "native-base";
import {  View, ScrollView } from "react-native";
import {
  Purplerose1,
  Purplerose2,
  Purplerose3,
} from "../../constants";
import AccountComponents from "./AccountComponents";
import PostComponents from "../../components/PostComponents";
export default function Account({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <AccountComponents />
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
              $234
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
              <Button backgroundColor={Purplerose1} onPress={()=>navigation.navigate('Post')}>Đăng bài</Button>
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
              <Button backgroundColor={Purplerose1}  onPress={()=>navigation.navigate('Recharge')}>Nạp tiền</Button>
            </View>
          </View>
        </View>
      </View>
      <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16, padding: 10, color: Purplerose3 }}>
            Bài viết của tôi
          </Text>
      <ScrollView>
            
      <PostComponents
        navigation={navigation}
        content="Thời trang từ tháng 1 năm 2017 với vẻ ngoài khỏe khoắn có Fuji, Công
          dân của Nhân loại, trang phục thường ngày, Packandgo, áo khoác dạ và
          gearbest"
      />
      <PostComponents
        navigation={navigation}
        content="Thời trang từ tháng 1 năm 2017 với vẻ ngoài khỏe khoắn có Fuji, Công
          dân của Nhân loại, trang phục thường ngày, Packandgo, áo khoác dạ và
          gearbest"
      />
    </ScrollView>
    </ScrollView>
  );
}