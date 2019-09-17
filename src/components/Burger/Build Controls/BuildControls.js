import React from 'react';

import BuildControl from './Build Control/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Bacon', type : 'bacon'},
    {label: 'Meat', type : 'meat'}
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {
                controls.map((obj) => {
                    return <BuildControl key={obj.label} label={obj.label} />
                })
            }
        </div>
    )
}

export default buildControls;