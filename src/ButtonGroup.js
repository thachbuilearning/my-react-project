import React from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({ onK16HighestMarkClick, onK12HighestMarkClick, onBothHighestMarkClick }) => {
    return (
        <div className="button-group">
            <button className="button" onClick={onK16HighestMarkClick}>Highest Mark in Class K16</button>
            <button className="button" onClick={onK12HighestMarkClick}>Highest Mark in Class K12</button>
            <button className="button" onClick={onBothHighestMarkClick}>Highest Mark in Both Classes</button>
        </div>
    );
};

export default ButtonGroup;
