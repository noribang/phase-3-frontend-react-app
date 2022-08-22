import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';

function TodoList({ todos, onTodoDelete }) {
    // Controlled component depends on state.

    return (
        <div>
            <ul className="todolist">
                {todos.map((todo) => (
                    <Todo 
                        key={uuidv4()}
                        todo={todo}
                        onTodoDelete={onTodoDelete}
                    />
                ))}
                
            </ul>
        </div>
    );
}

export default TodoList;