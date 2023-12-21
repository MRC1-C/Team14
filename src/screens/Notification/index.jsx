import { ScrollView, Text } from 'native-base'
import React, { useEffect } from 'react'
import NotificationComponent from './NotificationComponent'
import { postRequestJson } from '../../hooks/api'

const Notification = () => {
  useEffect(() => {
    postRequestJson('/get_notification', {
      "index": "0",
      "count": "10"
    })
    .then(dt => console.log(dt.data))
  }, [])
  return (
    <ScrollView>
      <NotificationComponent />
    </ScrollView>
  )
}

export default Notification