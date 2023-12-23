import { Avatar, Button, Text, View } from 'native-base'
import React from 'react'
import { Purplerose1 } from '../../constants'

const NotificationComponent = (props) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', padding: 8, alignItems: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 12 }}>
            <View style={{ width: '25%' }}>
                <Avatar
                    bg="amber.500"
                    source={{
                        uri: props.user.avatar
                    }}
                    size={'lg'}
                >
                    {props.user.username}
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
                    {props.feel ? props.user.username + " đã thích bài viết của bản": props.user.username + " đã bình luận bài viết của bản"}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontFamily: "Quicksand_500Medium",
                        color: Purplerose1,
                    }}
                >
                   {props.created}
                </Text>
               
            </View>
        </View>
    )
}

export default NotificationComponent