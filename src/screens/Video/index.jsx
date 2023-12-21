import { ScrollView, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { postRequest, postRequestJson } from '../../hooks/api'
import VideoComponent from '../../components/VideoComponent'

const Video = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        postRequestJson('/get_list_videos',
            {
                "last_id": null,
                "index": "0",
                "count": "10"
            }
        )
            .then(dt =>{
                setData(dt?.data?.post)
            } )
    }, [])
    return (
        <ScrollView>
            {
                data.map(dt => (
                    <VideoComponent key={dt.id} id={dt.id} video={dt?.video?.url} name={dt.name} described={dt.described} created={dt.created} feel={dt.feel} comment_mark={dt.comment_mark} author={dt.author} />
                ))
            }
        </ScrollView>
    )
}

export default Video