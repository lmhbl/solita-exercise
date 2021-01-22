import React from 'react';
import { List } from '@material-ui/core';

const Exercise1 = ({names}) => {
    
        return (
            <div>
                <p>Lista nimistä suuruusjärjestyksessä</p>

                {names.map((names => <List key={names.name}>
                    <li> {names.name} {names.amount}</li>
            </List>))}
          </div>
        )
    }
    
        
    
 
export default Exercise1;