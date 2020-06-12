import React from 'react'
import { View, Text } from 'react-native'

import Task from './Task'

export type TaskListProps = {
  tasks: {
    id: string
    title: string
    state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'
  }[]
  onArchiveTask: (id: string) => void
  onPinTask: (id: string) => void
}

function TaskList(props: TaskListProps) {
  const { tasks, onArchiveTask, onPinTask } = props

  if (tasks.length === 0) {
    return (
      <View>
        <Text>You have no task.</Text>
      </View>
    )
  }

  return (
    <View>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onPinTask={onPinTask}
          onArchiveTask={onArchiveTask}
        />
      ))}
    </View>
  )
}

export default TaskList
