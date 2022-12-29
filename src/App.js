import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  // We have the state below at the top level i.e in App.js
  // because we want all other sub components to be able 
  // to use it, if needed.
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Lunch with friends',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ])

  // Function to delete a task
  const deleteTask = (id) => {
    // setTasks is the function from useState that allows
    // you to update the state varibales inside functions.
    // .filter takes in a function and based on the output
    // of the function, returns the elements from the array
    // that pass that function. Here the function returns 
    // elements that dont have the same task.id as id thats 
    // passed to the deleteTask function originally.
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  return (
    // The root component: App returns what looks like html
    // but its actually JSX/JS Syntax Extension.
    <div className="container">
      <Header />
      {/* If the length of the tasks array is less than 0
        then display: 'No tasks to show' otherwise display 
        the Tasks component. This is written inside the 
        curly brackets because its a js expression.

        Passing the tasks array and the deleteTask function
        as props to the Tasks component*/} 
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
        {deleteTask}/> : 'No tasks to show'
      }
    </div>
  );
}

export default App;