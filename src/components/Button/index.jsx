import React from 'react';
import PropTypes from 'prop-types'
import { StyledBtn } from './styles';

const Button = ({ bgColor, fontColor, label, onClick, className }) => {

    return (
        <StyledBtn className={ className } bgColor={ bgColor } fontColor={ fontColor } onClick={ onClick }>
            { label }
        </StyledBtn>
    )
};

Button.propTypes = {
    bgColor: PropTypes.string, 
    fontColor: PropTypes.string, 
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default Button;
