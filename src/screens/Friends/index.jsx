import React, { useEffect, useState } from 'react'
import FriendComponent from './FriendComponent'
import { ScrollView, Text } from 'native-base'
import { postRequestJson } from '../../hooks/api'

const Friends = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    postRequestJson('/get_requested_friends', {
      "index": "0",
      "count": "10"
    })
      .then(dt => setData(dt?.data))
  }, [])
  console.log(data)
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
        Lời mời kết bạn {data?.total}
      </Text>
      {data?.requests?.map(dt => (
        <FriendComponent avatar={dt?.avatar} created={dt?.created} username={dt?.username} same_friends={dt?.same_friends} key={dt?.id} id={dt?.created} />
      ))}

    </ScrollView>
  )
}

export default Friends