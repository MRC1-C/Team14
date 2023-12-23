import React, { useState } from 'react';
import { Button, Icon, Input, KeyboardAvoidingView, Pressable, useToast } from "native-base";
import { Text, TextInput, View } from "react-native";
import { Purplerose3 } from '../../constants';
import useStore from '../../store';
import { postRequestJson } from '../../hooks/api';

export default function TopUpScreen() {
  const [amount, setAmount] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [loading, setLoading] = useState(false)
  const user = useStore(state => state.user)
  const setUser = useStore(state => state.setUser)
  const toast = useToast();

  const onSubmit = () => {
    setLoading(true)
    postRequestJson('/buy_coins', {
      "code": "string",
      "coins": parseInt(amount.replace(".", ""))
    })
      .then(data => {
        setUser({ ...user, coins: data.data.coins })
        setLoading(false)
        toast.show({ title: 'Nạp tiền thành công', placement: 'top' })
      })
  }

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
    switch (buttonId) {
      case 1:
        setAmount('10.000');
        break;
      case 2:
        setAmount('20.000');
        break;
      case 3:
        setAmount('50.000');
        break;
      case 4:
        setAmount('100.000');
        break;
      case 5:
        setAmount('200.000');
        break;
      case 6:
        setAmount('500.000');
        break;
      default:
        break;
    }
  };

  return (
    <View
      style={{ alignItems: 'center', flex: 1, marginTop: 10 }}>
      <View
        style={{ width: '90%', height: 300, borderColor: 'lightgray', borderRadius: 10, padding: 20 }}
        backgroundColor='white' >
        <Text style={{ fontFamily: "Quicksand_500Medium", paddingBottom: 40 }}>
          Số dư tài khoản
        </Text>

        <Text style={{ position: 'absolute', right: '7%', top: '4%', fontFamily: "Quicksand_500Medium", fontSize: 20, color: Purplerose3 }}>
          ${user.coins}
        </Text>

        <Text style={{ fontFamily: "Quicksand_500Medium" }}>
          Nhập số tiền muốn nạp
        </Text>

        <View style={{ position: 'absolute', top: '25%', borderBottomColor: 'lightgray', borderBottomWidth: 1, width: '113%' }} />
        <TextInput style={{ borderBottomColor: 'black', borderBottomWidth: 2, paddingTop: 10 }}
          placeholder='VND'
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Button
            onPress={() => handleButtonPress(1)}
            backgroundColor={selectedButton === 1 ? Purplerose3 : 'white'}
            style={{ width: '30%', borderColor: 'gray', borderWidth: 2 }}>
            <Text style={{ color: selectedButton === 1 ? 'white' : 'gray' }}>10.000</Text>
          </Button>

          <Button
            onPress={() => handleButtonPress(2)}
            backgroundColor={selectedButton === 2 ? Purplerose3 : 'white'}
            style={{ width: '30%', borderColor: 'gray', borderWidth: 2 }}>
            <Text style={{ color: selectedButton === 2 ? 'white' : 'gray' }}>20.000</Text>
          </Button>

          <Button
            onPress={() => handleButtonPress(3)}
            backgroundColor={selectedButton === 3 ? Purplerose3 : 'white'}
            style={{ width: '30%', borderColor: 'gray', borderWidth: 2 }}>
            <Text style={{ color: selectedButton === 3 ? 'white' : 'gray' }}>50.000</Text>
          </Button>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Button
            onPress={() => handleButtonPress(4)}
            backgroundColor={selectedButton === 4 ? Purplerose3 : 'white'}
            style={{ width: '30%', borderColor: 'gray', borderWidth: 2 }}>
            <Text style={{ color: selectedButton === 4 ? 'white' : 'gray' }}>100.000</Text>
          </Button>

          <Button
            onPress={() => handleButtonPress(5)}
            backgroundColor={selectedButton === 5 ? Purplerose3 : 'white'}
            style={{ width: '30%', borderColor: 'gray', borderWidth: 2 }}>
            <Text style={{ color: selectedButton === 5 ? 'white' : 'gray' }}>200.000</Text>
          </Button>

          <Button
            onPress={() => handleButtonPress(6)}
            backgroundColor={selectedButton === 6 ? Purplerose3 : 'white'}
            style={{ width: '30%', borderColor: 'gray', borderWidth: 2 }}>
            <Text style={{ color: selectedButton === 6 ? 'white' : 'gray' }}>500.000</Text>
          </Button>
        </View>

      </View >

      <Button
        isLoading={loading}
        onPress={onSubmit}
        backgroundColor={Purplerose3}
        style={{ width: '90%', alignItems: 'center', borderRadius: 20, position: 'absolute', bottom: '5%' }}
      >
        Nạp tiền
      </Button>
    </View>
  );
}
