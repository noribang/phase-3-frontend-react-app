import React, { useState } from "react";

function NewTodo({ onAddTodo }) {
    const [body, setBody] = useState("");

    // Handles add new todo submit button action.
    function handleSubmit(e) {
        e.preventDefault();

        // POST to Sinatra API
        fetch("http://localhost:9292/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body: body,
                importance: Math.floor(Math.random()*10) + 1,
                user_id: Math.floor(Math.random()*3) + 1,
            }),
        })
        .then((r) => r.json())
        .then((newTodo) => {
            onAddTodo(newTodo);
            setBody("");
        });

    }

    return (
        <form className="new-todo" onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="body"
        //   id="new-todo"
          placeholder="enter a new todo"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">New Todo</button>
        </form>

    );
}

export default NewTodo;