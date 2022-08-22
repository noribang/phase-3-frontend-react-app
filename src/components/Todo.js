import React from "react";

function Todo({ todo, onTodoDelete }) {

    const {id, body, importance, user_id} = todo;

    // Handles click that deletes instance by id.
    function handleDeleteClick() {
        fetch(`http://localhost:9292/todos/${id}`, {
            method: "DELETE",
        });

        onTodoDelete(id);
    }

    return (
        <li>{`${todo.body} Importance: ${todo.importance} `}<button onClick={handleDeleteClick}>Delete</button></li>
    );
}

export default Todo;