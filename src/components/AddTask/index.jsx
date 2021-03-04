import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { TaskForm, TaskControl } from './styles';

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Please add a task');
            return
        }
        //adding a task
        onAddTask({ text, day, reminder });

        //clearing a form
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <TaskForm onSubmit={ onSubmit }>
            <TaskControl>
                <label> Add Task
                    <input type="text" 
                        placeholder="Add task"  
                        value={ text } 
                        onChange={ e => setText(e.target.value) }/>
                </label>
            </TaskControl>
            <TaskControl>
                <label> Day & Time
                    <input type="text" 
                        placeholder="Day & Time" 
                        value={ day }  
                        onChange={ e => setDay(e.target.value) } />
                </label>
            </TaskControl>
            <TaskControl className="check">
                <label> Set Reminder
                </label>
                <input type="checkbox" 
                        checked={ reminder }
                        placeholder="Set reminder" 
                        value={ reminder } 
                        onChange={ e => setReminder(e.currentTarget.checked) } />
            </TaskControl>
                <Button className="btn-block" type="submit" label="Save task"/>
        </TaskForm>
    )
};

AddTask.propTypes = {
    onAddTask: PropTypes.func
}

export default AddTask;
