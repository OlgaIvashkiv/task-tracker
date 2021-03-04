import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';


export const TaskWrapper = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-left: ${ props => props.reminder ? '5px solid green' : '' };
`

export const TaskH3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledCrossIcon = styled(FaTimes)`
  color: ${ props => props.color ? props.color : 'red' };
  cursor: pointer
`