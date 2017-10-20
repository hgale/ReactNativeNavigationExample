/**
 * Loading screen component
 */
import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

import style from './style'

export default class LoadingScreen extends React.Component {
  render () {
    return (
      <View style={style.container}>
        <ActivityIndicator
          style={[style.indicator, {height: 80}]}
          size='large'
          color='#1B9ECC'
        />
        <Text>Loading...</Text>
      </View>
    )
  }
}
