import React, { useEffect, useState } from "react";
import { Button, Icon, Input, Pressable, Image, View, Text, ScrollView, KeyboardAvoidingView } from "native-base";
import { Padding, Purplerose1 } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";


export default function Auth({ navigation }) {
  const [isNumber, setIsNumber] = useState(true);
  const [accout, setaccout] = useState()
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false)
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const type = {
    number: {
      title: "Dang nhap hoac tao tai khoan",
      placeholder: "So dien thoai",
      type: "numeric",
      bottomTitle: "Dang nhap bang gmail",
    },
    gmail: {
      title: "Nhap email cua ban de tiep tuc",
      placeholder: "abc@gmail.com",
      type: "default",
      bottomTitle: "Dang nhap bang SDT",
    },
  };
  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/Hinh-anh-meo-cute-ngo-nghin.jpg?ssl=1",
        }}
        alt="logo"
        width={"100%"}
        height={200}
        borderBottomRadius={50}
      />
      <View style={{ padding: Padding }}>
        <Text style={{ fontSize: 20, fontFamily: "Quicksand_700Bold" }}>
          Xin chao
        </Text>
        <Text style={{ fontFamily: "Quicksand_500Medium" }}>
          {type[isNumber ? "number" : "gmail"].title}
        </Text>
        {error ? <Text style={{ color: 'red', marginTop: 10,fontFamily: "Quicksand_500Medium" }}>{error}</Text> : null}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <Input
          placeholder={type[isNumber ? "number" : "gmail"].placeholder}
          variant="underlined"
          marginTop={5}
          marginBottom={5}
          size="lg"
          keyboardType={type[isNumber ? "number" : "gmail"].type}
          fontFamily="Quicksand_500Medium"
          value={accout}
          onChangeText={value => setaccout(value)}
        />
        <Input
          variant="underlined"
          marginBottom={5}
          placeholder="Mật khẩu"
          marginTop={5}
          size="lg"
          value={password}
          onChangeText={(value) => setPassword(value)}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons name={show ? "visibility" : "visibility-off"} />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        {
          isSignUp &&
        <Input
          variant="underlined"
          marginBottom={5}
          placeholder="Xác nhận mật khẩu"
          marginTop={5}
          size="lg"
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
          type={showConfirm ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShowConfirm(!showConfirm)}>
              <Icon
                as={
                  <MaterialIcons name={showConfirm ? "visibility" : "visibility-off"} />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        }

        </KeyboardAvoidingView>
        <Button
          backgroundColor={Purplerose1}
          onPress={() => {
            if (!emailRegex.test(accout) && !isNumber) {
              setError('Địa chỉ email không hợp lệ');
              return;
            }
        
            // Kiểm tra xác nhận mật khẩu
            if (password !== confirmPassword && isSignUp) {
              setError('Mật khẩu không khớp');
              return;
            }
            navigation.navigate("AuthPassword", { "accout": accout })
          }
          }
        >
          Tiep tuc
        </Button>
        <Button
          variant={"link"}
          _text={{ color: Purplerose1 }}
          onPress={() => setIsNumber((prev) => !prev)}
        >
          {type[isNumber ? "number" : "gmail"].bottomTitle}
        </Button>
        <Button
          variant={"link"}
          _text={{ color: Purplerose1 }}
          onPress={() => setIsSignUp((prev) => !prev)}
        >
          {isSignUp ? "Đăng nhập" : "Đăng ký"}
        </Button>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontFamily: "Quicksand_500Medium" }}>
            Hoac tiep tuc bang
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              width={50}
              height={50}
              margin={2}
              borderBottomRadius={30}
              source={{
                uri: "https://www.facebook.com/images/fb_icon_325x325.png",
              }}
              alt="facebook"
            />
            <Image
              width={50}
              height={50}
              margin={2}
              borderBottomRadius={30}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
              }}
              alt="google"
            />
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontFamily: "Quicksand_500Medium" }}>
            Bang viec tiep tuc, ban da chap nhan
          </Text>
          <Text
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",
              fontFamily: "Quicksand_500Medium",
            }}
          >
            dieu khoan su dung
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}