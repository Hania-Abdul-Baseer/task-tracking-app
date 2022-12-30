import { useState } from 'react'

const AddTask = () => {
    // Each input in AddTask component will have a state
    // that is in component level and not App level,
    // which is why its here and not in App.js.
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    // The default value for the reminder state variable
    // will be set to false.
    const [reminder, setReminder] = useState(false);

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                {/* The value of this input will be the text from 
                the state and when it changes a function will be
                called that takes in the event (e) object and 
                it calls another function: setText from the state
                to change the state varibale: text to whatever is
                typed in the input. 
                The above is the same is also used for reminder 
                and day. */}
                <input type='text' placeholder='Add Task' 
                value={text} onChange={(e) => setText(e.target.
                value)}
                />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time'
                value={day} onChange={(e) => setDay(e.target.
                value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.
                checked)}
                />
            </div>

            <input className='btn btn-block' 
            type='submit' value='Save Task' />
        </form>
  )
}

export default AddTask