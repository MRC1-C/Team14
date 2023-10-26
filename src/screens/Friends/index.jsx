import React from 'react'
import FriendComponent from './FriendComponent'
import { ScrollView, Text } from 'native-base'

const Friends = () => {
  return (
    <ScrollView>
        <Text
                    style={{
                        fontSize: 20,
                        fontFamily: "Quicksand_700Bold",
                        color: 'black',
                        padding: 8,
                        backgroundColor: 'white'
                    }}
                >
                    Lời mời kết bạn
                </Text>
        <FriendComponent />
        <FriendComponent />
        <FriendComponent />
        <FriendComponent />
        <FriendComponent />
        <FriendComponent />

    </ScrollView>
  )
}

export default Friends