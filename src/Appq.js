import React from 'react';
import todosData from './toData';
import TodoItem from './TodoItem';

function Appq() {

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />);
    
    return (

        <div className="todo-list">
            <h1> THIS IS MAI PAGE OF THE TEAM </h1>
              {todoItems}
        </div>
    )
}

export default Appq;
