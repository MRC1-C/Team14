import { ScrollView, View, Text, Center, VStack, Skeleton } from 'native-base'
import React, { useEffect, useState, useRef } from 'react'
import { postRequest, postRequestJson } from '../../hooks/api'
import VideoComponent from '../../components/VideoComponent'
import { RefreshControl } from 'react-native'
import { Purplerose3 } from '../../constants'

const Video = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()
    const fetchData = () => {
        postRequestJson('/get_list_videos', {
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
    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])
    const scrollViewRef = useRef();
    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const isCloseToBottom =
            layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        if (isCloseToBottom) {
            fetchData();
        }
    };
    const onRefresh = async () => {
        setLoading(true);
        setData([])
        postRequestJson('/get_list_videos', {
            "index": "0",
            "count": "10"
        })
            .then(dt => {
                setLoading(false)
                setData([...dt?.data?.post])
            })
            .catch(err => console.log(err))

    };
    return (
        <ScrollView ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={400}
            refreshControl={<RefreshControl
                refreshing={loading}
                onRefresh={onRefresh}
            ></RefreshControl>}>
            {
                data.map(dt => (
                    <VideoComponent key={dt.id} id={dt.id} video={dt?.video?.url} name={dt.name} described={dt.described} created={dt.created} feel={dt.feel} comment_mark={dt.comment_mark} author={dt.author} />
                ))
            }
            {data?.length == 0 && !loading ? <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16, padding: 10, color: Purplerose3 }}>
                Không có video nào
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

export default Video