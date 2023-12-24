import { ScrollView, Text } from 'native-base'
import React, { useEffect } from 'react'
import NotificationComponent from './NotificationComponent'
import { postRequestJson } from '../../hooks/api'
import { useState } from 'react'
import useStore from '../../store'
import { RefreshControl } from 'react-native'

const Notification = () => {
  const [data, setData] = useState([])
  const user = useStore(state => state.user)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    postRequestJson('/get_notification', {
      "index": "0",
      "count": "10"
    })
      .then(dt => {
        console.log(dt.data)
        setData(dt.data)
      })
  }, [user])

  const onRefresh = async () => {
    setLoading(true);
    setData([])
    postRequestJson('/get_notification', {
      "index": "0",
      "count": "10"
    })
      .then(dt => {
        console.log(dt.data)
        setLoading(false)
        setData(dt.data)
      })
  };
  
  return (
    <ScrollView refreshControl={<RefreshControl
      refreshing={loading}
      onRefresh={onRefresh}
    ></RefreshControl>}>
      {
        data.map(dt => (

          <NotificationComponent user={dt.user} feel={dt.feel} created={dt.created} />
        ))
      }
    </ScrollView>
  )
}

export default Notification