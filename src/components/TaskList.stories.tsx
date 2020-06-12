import React from 'react'

import TaskList from './TaskList'
import { taskData, actionsData } from './Task.stories'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
}

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
]

export const withPinnedTasksData: {
  id: string
  title: string
  state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'
}[] = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
]

export const withArchivedTasksData: {
  id: string
  title: string
  state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'
}[] = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (archived)', state: 'TASK_ARCHIVED' },
]

export const Default = () => (
  <TaskList tasks={defaultTasksData} {...actionsData} />
)

export const WithPinnedTasks = () => (
  <TaskList tasks={withPinnedTasksData} {...actionsData} />
)

export const WithArchivedTasks = () => (
  <TaskList tasks={withArchivedTasksData} {...actionsData} />
)

export const Empty = () => <TaskList tasks={[]} {...actionsData} />
