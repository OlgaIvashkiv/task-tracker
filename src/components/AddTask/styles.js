import styled from 'styled-components';

export const TaskForm = styled.form`
    margin-bottom: 40px;
`

export const TaskControl = styled.div`
    margin: 20px 0;
    
    label {
        display: block;
    }

    input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }
    &.check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    label {
        flex: 1;
    }
    input {
        flex: 2;
        height: 20px;
    }

}
`