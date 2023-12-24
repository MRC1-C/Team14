import { Avatar, Button, Text, View, useToast } from 'native-base'
import React from 'react'
import { Purplerose1 } from '../../constants'
import { postRequestJson } from '../../hooks/api'

const FriendComponent = (props) => {
    const toast = useToast()
    return (
        <View style={{ display: 'flex', flexDirection: 'row', padding: 8, alignItems: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 12 }}>
            <View style={{ width: '30%' }}>
                <Avatar
                    bg="amber.500"
                    source={{
                        uri: props.avatar,
                    }}
                    size={'xl'}
                >
                    TS
                </Avatar>
            </View>
            <View style={{ width: '70%', gap: 4 }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontFamily: "Quicksand_500Medium",
                        color: 'black',
                    }}
                >
                    {props?.username}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontFamily: "Quicksand_500Medium",
                        color: Purplerose1,
                    }}
                >
                    Có {props.same_friends} bạn chung
                </Text>
                {!props?.fr && <>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <Button
                            style={{ flex: 1, marginRight: 10 }}
                            backgroundColor={Purplerose1}
                            onPress={() => {
                                postRequestJson('/set_accept_friend',
                                    {
                                        "user_id": props.id,
                                        "is_accept": "1"
                                    })
                                    .then(data => {
                                        toast.show({ title: 'Kết bạn thành công', placement: 'top' })
                                    })
                            }}
                        >
                            Kết bạn
                        </Button>

                        <Button
                            style={{ flex: 1 }}
                            backgroundColor={'gray.300'}
                            onPress={() => {
                                postRequestJson('/set_accept_friend',
                                    {
                                        "user_id": props.id,
                                        "is_accept": "0"
                                    })
                                    .then(data => {
                                        toast.show({ title: 'Đã xoá bạn', placement: 'top' })
                                    })
                            }}
                        >
                            Xoá
                        </Button>
                    </View>
                </>}
            </View>
        </View>
    )
}

export default FriendComponent