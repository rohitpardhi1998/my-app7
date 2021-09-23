import React from 'react';
import ReactDOM from 'react-dom';

function TodoItem(props) {
    return (
        <div>
  <input type="checkbox" />
            <p> {props.item.text}</p>
        </div>
    )
}
export default TodoItem;