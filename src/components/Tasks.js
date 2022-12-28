import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <>
        {/* We are looping through each task in the
        tasks array, and outputing a Task component
        for each while also passing the task itself as
        a prop to the Task component. */}
        {tasks.map((task) => (
            <Task key={task.id} task={task}/>
        ))}
    </>
  )
}

export default Tasks