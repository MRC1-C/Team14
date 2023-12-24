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

const AccountComponents = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigation = useNavigation();
  const [text, setText] = useState()
  const [newText, setNewText] = useState()
  const setUser = useStore(state => state.setUser)
  const [loading, setLoaing] = useState(false)
  const toast = useToast()
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
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
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
        {props.user != null ? (
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: "Quicksand_700Bold" }}>
              {props.user.username}
            </Text>
          </View>
        ) : (
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  paddingBottom: 10,
                  fontFamily: "Quicksand_700Bold",
                }}
              >
                Chao mung den voi FB
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
                <Image source={imageSetting} style={{ marginLeft: 70 }} />
              </TouchableOpacity>
            </View>
            <Button
              variant="outline"
              borderColor={Purplerose2}
              _text={{ color: Purplerose2 }}
              onPress={() => navigation.navigate("Auth")}
              style={{ width: 170 }}
            >
              Đăng nhập/Đăng ký
            </Button>
          </View>
        )}
      </View>
      {props?.user && (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button variant="outline"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            borderColor={Purplerose2}
            _text={{ color: Purplerose2 }}>Thay đổi mật khẩu</Button>
          <Button
            variant={"ghost"}
            onPress={async () => {
              navigation.navigate("Auth");
              await RemoveStorage();
              setUser(null)
            }}
          >
            <AntDesign name="logout" size={24} color={Purplerose2} />
          </Button>
        </View>
      )}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Thay đổi mật khẩu</Modal.Header>
          <Modal.Body>
            <Input placeholder="Mật khẩu cũ" value={text} onChangeText={setText} />
          </Modal.Body>
          <Modal.Body>
            <Input placeholder="Mậu khẩu mới" value={newText} onChangeText={setNewText} />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setModalVisible(false);
              }}>
                Cancel
              </Button>
              <Button isLoading={loading} onPress={() => {
                setLoaing(true)
                postRequestJson('/change_password', {
                  "password": text,
                  "new_password": newText
                })
                  .then(async data => {
                    setLoaing(false)
                    console.log(data)
                    let token = await GetStorage()
                    token = { ...token, token: data?.data?.token }
                    await SetStorage(token)
                    setUser(token)
                    toast.show({ title: "Đổi mật khẩu thành công", placement: 'top' })
                    setModalVisible(false);
                  })
                  .catch(err => console.log(err))
              }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};
export default AccountComponents;
