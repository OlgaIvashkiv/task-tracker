import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { HeaderTask } from './styles';
import Button from '../Button';


const Header = ({ title, theme, onAddShow, showAdd }) => {
const location = useLocation();

    return (
        <HeaderTask>
            <h1>{ title }</h1>
            {location.pathname === '/' && (<Button bgColor={ showAdd ? 'red' : theme.colors.green } 
                    fontColor={ theme.colors.white } 
                    label={ showAdd ? 'Close' : 'Add' }
                    onClick={ onAddShow }
            />)}
        </HeaderTask>
    )
};

Header.defaultProps = {
    title : 'Task Tracker'
};

Header.propTypes = {
    title : PropTypes.string,
    theme: PropTypes.object,
    onAddShow: PropTypes.func,
    showAdd: PropTypes.bool
}

export default Header;
