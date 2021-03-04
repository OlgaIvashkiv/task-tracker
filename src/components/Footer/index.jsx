import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from './styles';

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright &copy; { new Date().getFullYear() }</p>
            <Link to="/about">About</Link>
        </StyledFooter>
    )
}

export default Footer
