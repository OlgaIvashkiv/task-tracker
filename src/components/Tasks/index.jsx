import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Task from '../Task';


const Tasks = ({ tasks, onDeleteTask, onToggleReminder }) => {
    

    return (
        <>
           {
           tasks.map((task) => ( 
                <Task key={ uniqid() } task={ task } onDeleteTask={ onDeleteTask } onToggleReminder={ onToggleReminder }/>
           ) )
            }
        </>
    )
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    onDeleteTask: PropTypes.func,
    onToggleReminder: PropTypes.func
}

export default Tasks;
