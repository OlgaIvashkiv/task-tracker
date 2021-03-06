import styled from 'styled-components';

export const HeaderTask = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

`

export const HeaderBtn = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
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

.btn-block {
  display: block;
  width: 100%;
}

`