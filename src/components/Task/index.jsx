import React from 'react';
import PropTypes from 'prop-types';
import { TaskWrapper, TaskH3, StyledCrossIcon } from './styles';

const Task = ({ task, onDeleteTask, onToggleReminder }) => {
    return (
        <TaskWrapper reminder={ task.reminder } onDoubleClick={ () => onToggleReminder(task.id) }>
            <TaskH3>{ task.text } <StyledCrossIcon onClick={() => onDeleteTask(task.id) }/> </TaskH3>
        </TaskWrapper>
    )
};

Task.propTypes = {
    task: PropTypes.object,
    onDeleteTask: PropTypes.func
}

export default Task;
