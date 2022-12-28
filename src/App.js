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

  return (
    // The root component: App returns what looks like html
    // but its actually JSX/JS Syntax Extension.
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;