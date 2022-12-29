// Using these react icons allows us to use 
// icons as components.
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    
    return (
      <div className='task'>
          <h3>
              {task.text} <FaTimes style={{ color: 
              'red', cursor: 'pointer' }} 
              onClick={() => onDelete(task.id)}/>
              {/* When the button is clicked, an empty
              function is called, which calls the onDelete
              function and passes the task's id as a 
              parameter. */}
              
              {/* The above onDelete function will move to
               Tasks then to App, where its defined. 
               This is because the function was
               defined in App and passed to Tasks as a prop
               then from Tasks it was passed to Task as 
               a prop. Because in Task component is where
               the function is actually called (onClick of
               the delete button). 

               This shows that states get passed down and 
               actions get passed up. */}
          </h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default Task