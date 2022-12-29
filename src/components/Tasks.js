import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
        {/* We are looping through each task in the
        tasks array, and outputing a Task component
        for each while also passing the onDelete function, 
        task id, and the task itself as a prop to the 
        Task component. */}
        {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete}/>
        ))}
    </>
  )
}

export default Tasks