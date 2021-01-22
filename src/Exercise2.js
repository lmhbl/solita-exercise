import React from 'react';
import { List } from '@material-ui/core';

const Exercise2 = ({names}) => {
   
    return (
        <div>
            <p>Lista nimistä aakkosjärjestyksessä</p>
            {names.map((names => <List key={names.name}>
                <li>{names.name}</li>
            </List>))}
        </div>
        
    )    
} 
export default Exercise2;