import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export type TaskProps = {
  task: {
    id: string
    title: string
    state: string
    updatedAt?: Date
  }
  onArchiveTask?: () => void
  onPinTask?: () => void
}

function Task(props: TaskProps) {
  const {
    task: { title },
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Task
