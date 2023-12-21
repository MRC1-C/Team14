import { View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { postRequest } from '../../hooks/api'
import VideoComponent from '../../components/VideoComponent'

const Video = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        postRequest('/get_list_videos',
            {
                "last_id": null,
                "index": "0",
                "count": "10"
            }
        )
            .then(dt => setData(dt))
    }, [])
    return (
        <View>
            <VideoComponent />
        </View>
    )
}

export default Video