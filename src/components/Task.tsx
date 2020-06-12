import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkbox: {
    marginLeft: 24,
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    marginLeft: 24,
    fontSize: 16,
    fontWeight: 'bold',
  },
  star: {
    marginRight: 24,
    fontSize: 18,
  },
})

export type TaskProps = {
  task: {
    id: string
    title: string
    state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'
  }
  onArchiveTask: (id: string) => void
  onPinTask: (id: string) => void
}

function Task(props: TaskProps) {
  const {
    task: { id, title, state },
    onArchiveTask,
    onPinTask,
  } = props

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.checkAndTitle}>
          <TouchableOpacity onPress={() => onArchiveTask(id)}>
            <Text style={styles.checkbox}>
              {state === 'TASK_ARCHIVED' ? '☑︎' : '□'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        {state !== 'TASK_ARCHIVED' && (
          <TouchableOpacity onPress={() => onPinTask(id)}>
            <Text style={styles.star}>
              {state === 'TASK_PINNED' ? '★' : '☆'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Task
