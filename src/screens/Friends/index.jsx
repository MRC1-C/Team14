import React, { useEffect, useState } from 'react'
import FriendComponent from './FriendComponent'
import { Avatar, Button, Input, ScrollView, Text, View, useToast } from 'native-base'
import { postRequestJson } from '../../hooks/api'
import useStore from '../../store'
import { Purplerose1 } from '../../constants'
import { RefreshControl } from 'react-native'

const Friends = () => {
  const [data, setData] = useState([])
  const user = useStore(state => state.user)
  const [fr, setFr] = useState([])
  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState(false)
  const toast = useToast()
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
  }, [user])
  const onRefresh = async () => {
    setLoading(true);
    setData([])
    setFr([])
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
      setLoading(false)
  };
  return (
    <ScrollView refreshControl={<RefreshControl
      refreshing={loading}
      onRefresh={onRefresh}
    ></RefreshControl>}>
      <View style={{ padding: 8 }}>
        <Input placeholder='Tìm kiếm bạn bè' style={{ width: '80%' }} onChangeText={(e) => {
          setLoading(true)
          postRequestJson('/search_user', {
            "keyword": e,
            "index": "0",
            "count": "10"
          })
            .then(dt => {
              setLoading(false)
              setSearch([...dt?.data])
            })
            .catch(err => {
              setLoading(false)
              setSearch([])
            })
        }} />
      </View>
      {
        loading && <Text>Loading</Text>
      }
      {
        search.length > 0 && (
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Quicksand_700Bold",
                color: 'black',
                padding: 8,
                backgroundColor: 'white'
              }}
            >
              Bạn bè
            </Text>
            <View>
              {
                search.map(dt => (
                  <View style={{ display: 'flex', flexDirection: 'row', padding: 8, alignItems: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 12 }}>
                    <View style={{ width: '30%' }}>
                      <Avatar
                        bg="amber.500"
                        source={{
                          uri: dt.avatar,
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
                        {dt?.username}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: "Quicksand_500Medium",
                          color: Purplerose1,
                        }}
                      >
                        Có {dt.same_friends} bạn chung
                      </Text>
                      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <Button
                          style={{ flex: 1, marginRight: 10 }}
                          backgroundColor={Purplerose1}
                          onPress={() => {
                            postRequestJson('/set_request_friend',
                              {
                                "user_id": dt.id,
                              })
                              .then(data => {
                                toast.show({ title: "Đã gửi lời mời kết bạn", placement: 'top' })
                                console.log(data)
                              })
                          }}
                        >
                          Gửi lời mời kết bạn
                        </Button>
                      </View>
                    </View>
                  </View>
                ))
              }
            </View>
          </View>
        )
      }
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