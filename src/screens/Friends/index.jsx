import React, { useEffect, useState } from 'react'
import FriendComponent from './FriendComponent'
import { ScrollView, Text } from 'native-base'
import { postRequestJson } from '../../hooks/api'
import useStore from '../../store'

const Friends = () => {
  const [data, setData] = useState([])
  const user = useStore(state => state.user)
  const [fr, setFr] = useState([])
  useEffect(() => {
    postRequestJson('/get_requested_friends', {
      "index": "0",
      "count": "10"
    })
      .then(dt => setData(dt?.data))


    postRequestJson('/get_user_friends', {
      "index": "0",
      "count": "5",
      "user_id": '' + user?.id
    })
      .then(dt => setFr(dt.data.friends))
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
        <FriendComponent avatar={dt?.avatar} created={dt?.created} username={dt?.username} same_friends={dt?.same_friends} key={dt?.id} id={dt?.id} />
      ))}
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Quicksand_700Bold",
          color: 'black',
          padding: 8,
          backgroundColor: 'white'
        }}
      >Bạn bè</Text>
      {
        fr.map(dt => (
          <FriendComponent fr={true} avatar={dt?.avatar} created={dt?.created} username={dt?.username} same_friends={dt?.same_friends} key={dt?.id} id={dt?.id} />

        ))
      }

    </ScrollView>
  )
}

export default Friends