import { ScrollView, Text } from 'native-base'
import React, { useEffect } from 'react'
import NotificationComponent from './NotificationComponent'
import { postRequestJson } from '../../hooks/api'
import { useState } from 'react'

const Notification = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    postRequestJson('/get_notification', {
      "index": "0",
      "count": "10"
    })
    .then(dt => setData(dt.data))
  }, [])
  return (
    <ScrollView>
      {
        data.map(dt=> (

          <NotificationComponent user={dt.user} feel={dt.feel} created={dt.created}/>
        ))
      }
    </ScrollView>
  )
}

export default Notification