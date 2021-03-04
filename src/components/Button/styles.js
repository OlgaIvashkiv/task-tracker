import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: inline-block;
  background: ${props => props.bgColor ? props.bgColor : '#000'};
  color: ${props => props.fontColor ? props.fontColor : '#fff'};
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;


    &:focus {
  outline: none;
}

    &:active {
  transform: scale(0.98);
}

&.btn-block {
  display: block;
  width: 100%;
}

`