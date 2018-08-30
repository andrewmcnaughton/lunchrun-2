import React from 'react';

const SingleTodo = props => {
    return(
        <li key={props.index}>{props.todo}<button onClick={props.delete}>x</button></li>
    );
}
export default SingleTodo;