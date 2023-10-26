import { Avatar, Button, Text, View } from 'native-base'
import React from 'react'
import { Purplerose1 } from '../../constants'

const FriendComponent = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', padding: 8, alignItems: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 12 }}>
            <View style={{ width: '30%' }}>
                <Avatar
                    bg="amber.500"
                    source={{
                        uri: "https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/13/tieu-su-ca-si-rose-blackpink-12-167628252304049682913.jpg",
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
                    Rose Nguyễn
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
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <Button
                        style={{ flex: 1, marginRight: 10 }}
                        backgroundColor={Purplerose1}
                    >
                        Kết bạn
                    </Button>

                    <Button
                        style={{ flex: 1 }}
                        backgroundColor={'gray.300'}
                    >
                        Xoá
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default FriendComponent