import React, { useEffect, useRef, useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import PostComponents from '../../components/PostComponents'
import { Center, Skeleton, VStack, View, Text, Input, Icon } from 'native-base'
import { GetStorage, postRequestJson } from '../../hooks/api'
import ModelComponents from '../../components/ModelComponents'
import useStore from '../../store'
import { Purplerose3 } from '../../constants'
export default function Home({ navigation, id, route }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const user = useStore(state => state.user)
  console.log(user)
  useEffect(() => {
    setLoading(true)
    if (route?.params?.refresh) {
      if (user) {
        postRequestJson('/get_list_posts', {
          "index": "0",
          "count": "10",
          "user_id": id ? id : null,

        })
          .then(dt => {
            setLoading(false)
            setData([...dt?.data?.post])
          })
          .catch(err => console.log(err))

      }
    }
  }, [route?.params?.refresh]);

  const scrollViewRef = useRef();
  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      !loading && fetchData();
    }
  };
  const fetchData = () => {
    setLoading(true)
    if (user) {
      postRequestJson('/get_list_posts', {
        "user_id": id ? id : null,
        "last_id": data.length ? data[data.length - 1]?.id : null,
        "index": "0",
        "count": "10"
      })
        .then(dt => {
          setLoading(false)
          setData(prev => [...prev, ...dt?.data?.post])
        })
        .catch(err => console.log(err))

    }
  }
  useEffect(() => {
    if (user) {
      fetchData()
    }
  }, [user])
  const onRefresh = async () => {
    setLoading(true);
    setData([])
    if (user) {
      postRequestJson('/get_list_posts', {
        "user_id": id ? id : null,
        "index": "0",
        "count": "10"
      })
        .then(dt => {
          setLoading(false)
          setData([...dt?.data?.post])
        })
        .catch(err => console.log(err))

    }
  };
  return (
    <ScrollView ref={scrollViewRef}
      onScroll={handleScroll}
      scrollEventThrottle={400}
      refreshControl={<RefreshControl
        refreshing={loading}
        onRefresh={onRefresh}
      ></RefreshControl>}
    >
    <View style={{padding: 8}}>
      <Input placeholder='Tìm kiếm' style={{ width: '80%' }} onChangeText={(e) => {
        setLoading(true)
        postRequestJson('/search', {
          "user_id": id ? id : null,
          "keyword": e,
          "index": "0",
          "count": "10"
        })
          .then(dt => {
            setLoading(false)
            setData([...dt?.data])
          })
      }} />
    </View>
      <ModelComponents />


      {
        data?.length > 0 && data.map(dt => (
          <PostComponents
            image={dt.image}
            key={dt?.id}
            navigation={navigation}
            content={dt.described}
            review=""
            author={dt?.author}
            feel={dt?.feel}
            created={dt?.created}
            comment_mark={dt?.comment_mark}
            id={dt?.id}
          />
        ))
      }
      {data?.length == 0 && !loading ? <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16, padding: 10, color: Purplerose3 }}>
        Không có bài viết nào
      </Text> : (
        <View>
          <Center w="100%">
            <VStack w="100%" maxW="500" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
              borderColor: "white"
            }} _light={{
              borderColor: "white",

            }} padding={4} style={{ backgroundColor: 'white' }}>
              <Skeleton.Text px="4" />
              <Skeleton h="40" />
            </VStack>
          </Center>
          <Center w="100%">
            <VStack w="100%" maxW="500" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
              borderColor: "white"
            }} _light={{
              borderColor: "white",

            }} padding={4} style={{ backgroundColor: 'white' }}>
              <Skeleton.Text px="4" />
              <Skeleton h="40" />
            </VStack>
          </Center>

        </View>
      )}
    </ScrollView>
  )
}
