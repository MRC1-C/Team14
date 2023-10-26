import { Avatar, Button, Text, View } from 'native-base'
import React from 'react'
import { Purplerose1 } from '../../constants'

const NotificationComponent = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', padding: 8, alignItems: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 12 }}>
            <View style={{ width: '25%' }}>
                <Avatar
                    bg="amber.500"
                    source={{
                        uri: "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/40f9bce2acffc0b9dd65ec9ee11bd0d4.jpeg?x-expires=1661443200&x-signature=VduT2wxDBGhq%2B%2FkUWDBLkPco5RA%3D",
                    }}
                    size={'lg'}
                >
                    TS
                </Avatar>
            </View>
            <View style={{ width: '75%', gap: 4 }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "Quicksand_500Medium",
                        color: 'black',
                    }}
                >
                    Alice đã nhặc đến bạn trong bình luận trong nhóm AAA
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontFamily: "Quicksand_500Medium",
                        color: Purplerose1,
                    }}
                >
                   15p trước
                </Text>
               
            </View>
        </View>
    )
}

export default NotificationComponent